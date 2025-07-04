import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestauarantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestauarantMenu(resId);
  const [showIndex, setShowIndex] = useState(null); // Start with null to indicate no category is open

  const handleAddToCart = (item) => {
    console.log("Adding to cart:", item);
  };

  if (resInfo === null) {
    return <div className="loading">Loading...</div>;
  }

  const { name, cuisines, avgRating, totalRatingsString, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const restaurantMenus =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const finalRestaurantMenus = restaurantMenus.filter(
    (restaurant) =>
      restaurant?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const setIndexHandler = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="menu-container p-4">
      <div className="restaurant-header mb-4">
        <h1 className="restaurant-name text-2xl font-bold">{name}</h1>
        <p className="restaurant-cuisines text-gray-600">
          {cuisines.join(", ")}
        </p>
        <p className="restaurant-info text-gray-600">
          Average Rating: {avgRating} ({totalRatingsString}) |{" "}
          {costForTwoMessage}
        </p>
      </div>
      <div className="menu-categories">
        {finalRestaurantMenus.map((category, index) => (
          <RestaurantCategory
            key={index} // Ensure each component has a unique key
            category={category}
            showItems={showIndex === index ? true : false}
            onSetIndex={() => setIndexHandler(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
