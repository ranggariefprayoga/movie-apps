import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveFavoriteRestaurantActionCreator } from "../states/favoriteRestaurant/action";
import FavoriteRestaurantList from "../component/FavoriteRestaurantList";
import LoadingFavorite from "../component/LoadingFavorite";
import JumbotronFavorites from "../component/JumbotronFavorite";

export default function FavoritePage() {
  const { favoriteRestaurant = null } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorite"));
    dispatch(receiveFavoriteRestaurantActionCreator(data));
  }, [dispatch]);

  return (
    <div className="favorite-page flex flex-col gap-2 mt-8 min-h-screen">
      <JumbotronFavorites />
      {favoriteRestaurant !== null ? <FavoriteRestaurantList favoriteRestaurant={favoriteRestaurant} /> : <LoadingFavorite />}
    </div>
  );
}
