import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // local state variable => super powerful vairalable
  const [listOfrestaurants, setListOfrestaurant] = useState(resList);
  //   //normal js variable
  //   let listOfrestaurant = [
  //     {
  //       id: "121603",
  //       name: "Kannur Food Point",

  //       cuisines: ["Kerala", "Chinese"],

  //       costForTwo: 30000,

  //       deliveryTime: 23,

  //       deliveryTime: 23,

  //       avgRating: "3.8",
  //     },
  //     {
  //       id: "121604",
  //       name: "KFC",

  //       cuisines: ["Kerala", "Chinese"],

  //       costForTwo: 30000,

  //       deliveryTime: 23,

  //       deliveryTime: 23,

  //       avgRating: "4.5",
  //     },
  //   ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfrestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            // console.log(listOfrestaurant);
            setListOfrestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfrestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
