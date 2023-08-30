/* eslint-disable react/prop-types */
import RestaurantItem from "./RestaurantItem";

function RestaurantsList({ restaurants }) {
  return (
    <div className="restaurants-container">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsList;
