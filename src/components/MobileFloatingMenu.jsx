import React, { useState } from "react";

const MobileFloatingMenu = ({ categories, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (categoryId) => {
    onSelectCategory(categoryId);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full shadow-lg font-bold text-sm tracking-wide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Menu
        </button>
      </div>

      {/* Overlay & Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full bg-white rounded-t-2xl shadow-2xl max-h-[80vh] flex flex-col animate-slide-up">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
              <h3 className="font-bold text-lg text-gray-800">Categories</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto p-2">
              {categories.map((category) => (
                <button
                  key={category.CategryId}
                  onClick={() => handleSelect(category.CategryId)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 active:bg-blue-50 transition-colors flex items-center justify-between group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-[#009688]">
                    {category.CategryName}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    {category.ItemListWidget
                      ? category.ItemListWidget.length
                      : 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileFloatingMenu;
