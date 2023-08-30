import { ActionType } from "./action";

function listRestaurantsReducer(restaurants = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_RESTAURANTS:
      return action.payload.restaurants;
    default:
      return restaurants;
  }
}

export default listRestaurantsReducer;
