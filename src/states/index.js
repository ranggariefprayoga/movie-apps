import { configureStore } from "@reduxjs/toolkit";
import listRestaurantsReducer from "./ListRestaurants/reducer";
import detailRestaurantReducer from "./detailRestaurant/reducer";

const store = configureStore({
  reducer: {
    listRestaurants: listRestaurantsReducer,
    detailRestaurant: detailRestaurantReducer,
  },
});

export default store;
