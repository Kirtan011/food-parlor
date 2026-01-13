import MenuItem from "./MenuItem";

const MenuGrid = ({ items, categoryName, onAdd }) => {
  return (
    <div className="mt-4 lg:mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        {categoryName}{" "}
        <span className="text-gray-400 text-lg font-normal">
          ({items.length})
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <MenuItem key={item.ItemId} item={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
