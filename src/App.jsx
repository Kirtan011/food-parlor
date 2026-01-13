import { useState, useEffect, useMemo } from "react";
import "./App.css";
import "./index.css";
import axios from "axios";
import NavBar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import MenuGrid from "./components/MenuGrid";
import CartSidebar from "./components/CartSidebar";
import MobileFloatingMenu from "./components/MobileFloatingMenu";
import SearchBar from "./components/SearchBar";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Main Menu");

  const scrollToMenu = () => {
    const element = document.getElementById("menu-grid-start");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://www.foodchow.com/api/FoodChowWD/GetRestaurantMenuWDWidget_multi?ShopId=3161&locale_id=null"
        );
        const result = res.data.data;
        if (res.data && result) {
          const parsedRes = JSON.parse(result);
          const categories = parsedRes.CategoryList || [];
          setMenuData(categories);

          if (categories.length > 0) {
            setActiveCategory(categories[0].CategryId);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    scrollToMenu();
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const filteredCategories = useMemo(() => {
    if (activeTab === "Main Menu") {
      return menuData;
    }

    const lowerTab = activeTab.toLowerCase();

    if (lowerTab.includes("breakfast")) {
      return menuData.filter((c) => {
        const name = c.CategryName.toLowerCase();
        return (
          name.includes("tea") ||
          name.includes("coffee") ||
          name.includes("sandwich") ||
          name.includes("juice") ||
          name.includes("breakfast")
        );
      });
    }

    if (lowerTab.includes("lunch")) {
      return menuData.filter((c) => {
        const name = c.CategryName.toLowerCase();
        return (
          name.includes("punjabi") ||
          name.includes("thali") ||
          name.includes("rice") ||
          name.includes("roti") ||
          name.includes("burger") ||
          name.includes("pizza") ||
          name.includes("pasta") ||
          name.includes("chinese")
        );
      });
    }

    if (lowerTab.includes("dinner")) {
      return menuData.filter((c) => {
        const name = c.CategryName.toLowerCase();
        return (
          name.includes("soup") ||
          name.includes("starter") ||
          name.includes("chinese") ||
          name.includes("punjabi") ||
          name.includes("tandoori") ||
          name.includes("pizza") ||
          name.includes("pasta") ||
          name.includes("dinner")
        );
      });
    }

    return menuData;
  }, [activeTab, menuData]);

  useEffect(() => {
    if (filteredCategories.length > 0) {
      const exists = filteredCategories.find(
        (c) => c.CategryId === activeCategory
      );
      if (!exists) {
        setActiveCategory(filteredCategories[0].CategryId);
      }
    } else {
      setActiveCategory(null);
    }
  }, [filteredCategories, activeCategory]);

  const filteredItems = useMemo(() => {
    if (!activeCategory || filteredCategories.length === 0) return [];

    const category = filteredCategories.find(
      (c) => c.CategryId === activeCategory
    );
    if (!category || !category.ItemListWidget) return [];

    let items = category.ItemListWidget;

    if (searchQuery) {
      items = items.filter((item) =>
        item.ItemName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return items;
  }, [activeCategory, filteredCategories, searchQuery]);

  const activeCategoryName = useMemo(() => {
    const cat = filteredCategories.find((c) => c.CategryId === activeCategory);
    return cat ? cat.CategryName : "";
  }, [activeCategory, filteredCategories]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <NavBar activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="max-w-[1600px] mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
        <div className="lg:col-span-3">
          <div className="hidden lg:block mb-6 sticky top-0 bg-white z-10 pb-2 pt-2">
            <CategoryFilter
              categories={filteredCategories}
              activeCategory={activeCategory}
              onSelectCategory={handleCategoryChange}
            />
          </div>

          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div id="menu-grid-start">
            {filteredCategories.length > 0 ? (
              <MenuGrid
                items={filteredItems}
                categoryName={activeCategoryName}
                onAdd={handleAddToCart}
              />
            ) : (
              <div className="text-center py-10 text-gray-500">
                No items found for {activeTab}.
              </div>
            )}
          </div>
          <div className="mt-8 text-xs text-gray-400 pb-20 lg:pb-0">
            Fssai Lic no. Foodchow3161
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:col-span-1">
          <CartSidebar clearCart={handleClearCart} cartItems={cart} />
        </div>
      </div>

      <MobileFloatingMenu
        categories={filteredCategories}
        onSelectCategory={handleCategoryChange}
      />
    </div>
  );
}

export default App;
