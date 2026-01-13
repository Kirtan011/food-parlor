import React, { useRef } from "react";

const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center w-full">
      <button
        onClick={() => scroll("left")}
        className="p-2 mr-2 rounded-full hover:bg-gray-100 border border-gray-200 text-gray-600 flex-shrink-0"
        aria-label="Scroll left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto no-scrollbar py-2 flex-1 scroll-smooth"
      >
        {categories.map((category) => (
          <button
            key={category.CategryId}
            onClick={() => onSelectCategory(category.CategryId)}
            className={`whitespace-nowrap px-6 py-1 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
              activeCategory === category.CategryId
                ? "bg-[#009688] text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {category.CategryName}
          </button>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="p-2 ml-2 rounded-full hover:bg-gray-100 border border-gray-200 text-gray-600 flex-shrink-0"
        aria-label="Scroll right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CategoryFilter;
