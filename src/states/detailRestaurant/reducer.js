import { ActionType } from "./action";

function detailRestaurantReducer(restaurant = null, action = {}) {
  switch (action.type) {
    case ActionType.GET_DETAIL_RESTAURANT:
      return action.payload.restaurant;
    case ActionType.ADD_CUSTOMER_REVIEW:
      return { ...restaurant, customerReviews: [...restaurant.customerReviews, action.payload.customerReviews] };
    default:
      return restaurant;
  }
}

export default detailRestaurantReducer;
