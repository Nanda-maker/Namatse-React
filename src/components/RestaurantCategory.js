import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // console.log(data);
  // const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };
  return (
    // header
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {showItem && <ItemList items={data.itemCards} />}
    </div>
    // Accordion Body
  );
};

export default RestaurantCategory;
// this component is controlled component since RestaurantMenu component is
// controlling this component state
// However, if this component has it's state variable then it is known as uncontrolled component and managing state itself
