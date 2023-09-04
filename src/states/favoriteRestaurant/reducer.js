import { ActionType } from "./action";

const favoritesRestaurantReducer = (restaurants = [], action) => {
  // console.log(typeof state);
  switch (action.type) {
    case ActionType.RECEIVE_FAVORITE_RESTAURANT:
      return action.payload.restaurants;
    case ActionType.ADD_FAVORITE_RESTAURANT:
      return [...restaurants, action.payload.restaurant];
    default:
      return restaurants;
  }
};

export default favoritesRestaurantReducer;
