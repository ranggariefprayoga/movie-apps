import { ActionType } from "./action";

function detailRestaurantReducer(restaurant = {}, action = {}) {
  switch (action.type) {
    case ActionType.GET_DETAIL_RESTAURANT:
      return action.payload.restaurant;
    default:
      return restaurant;
  }
}

export default detailRestaurantReducer;
