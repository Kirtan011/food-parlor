const MenuItem = ({ item, onAdd }) => {
  const imageBaseUrl = "https://www.foodchow.com/foodchow-data/food-item/";

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
      <div>
        {item.ItemImage && (
          <div className="mb-3 w-full h-40 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={`${imageBaseUrl}${item.ItemImage}`}
              alt={item.ItemName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}

        <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2">
          {item.ItemName}
        </h3>

        {item.Description && (
          <p className="text-gray-500 text-sm line-clamp-2 mb-3">
            {item.Description}
          </p>
        )}
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <span className="font-bold text-gray-900 text-lg">
          Rs.{item.Price ? item.Price.toFixed(2) : "0.00"}
        </span>

        <button
          onClick={() => onAdd(item)}
          className="cursor-pointer bg-teal-50/90 font-semibold hover:border-teal-700 text-teal-700 md:hover:bg-black sm:hover:text-white px-6 py-1.5 md:bg-white text-shadow-white rounded-full border md:border-black md:hover:border-black text-sm sm:font-bold  transition-colors"
        >
          + ADD
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
