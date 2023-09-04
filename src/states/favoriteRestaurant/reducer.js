import { ActionType } from "./action";

const initialState = {
  favorites: [],
};

const favoritesRestaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_FAVORITE_RESTAURANT:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default favoritesRestaurantReducer;
