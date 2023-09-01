/* eslint-disable react/prop-types */
import RestaurantItem from "./RestaurantItem";

function RestaurantsList({ restaurants }) {
  return (
    <div className="restaurants grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsList;
