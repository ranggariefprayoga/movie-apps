import { configureStore } from "@reduxjs/toolkit";
import listRestaurantsReducer from "./ListRestaurants/reducer";
import detailRestaurantReducer from "./detailRestaurant/reducer";
import favoritesRestaurantReducer from "./favoriteRestaurant/reducer";

const store = configureStore({
  reducer: {
    listRestaurants: listRestaurantsReducer,
    detailRestaurant: detailRestaurantReducer,
    favoriteRestaurant: favoritesRestaurantReducer,
  },
});

export default store;
