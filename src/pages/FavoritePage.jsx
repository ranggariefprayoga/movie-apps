import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveFavoriteRestaurantActionCreator } from "../states/favoriteRestaurant/action";

export default function FavoritePage() {
  const { favoriteRestaurant = null } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorite"));
    dispatch(receiveFavoriteRestaurantActionCreator(data));
  }, [dispatch]);

  return (
    <>
      <div>FavoritePage</div>
      {favoriteRestaurant.map((restaurant, idx) => (
        <div key={idx}>{restaurant.name}</div>
      ))}
    </>
  );
}
