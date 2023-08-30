import api from "../../utils/api";

const ActionType = {
  GET_DETAIL_RESTAURANT: "GET_DETAIL_RESTAURANT",
  ADD_CUSTOMER_REVIEW: "ADD_CUSTOMER_REVIEW",
};

function getDetailRestaurantActionCreator(restaurant) {
  return {
    type: ActionType.GET_DETAIL_RESTAURANT,
    payload: {
      restaurant,
    },
  };
}

function addCustomerReviewActionCreator(customerReviews) {
  return {
    type: ActionType.ADD_CUSTOMER_REVIEW,
    payload: {
      customerReviews,
    },
  };
}

function receiveDetailRestaurant(id) {
  return async (dispatch) => {
    try {
      const restaurant = await api.getDetailRestaurant(id);
      dispatch(getDetailRestaurantActionCreator(restaurant));
    } catch (error) {
      error.message;
    }
  };
}

function asyncAddCustomerReview({ name, review }) {
  return async (dispatch) => {
    dispatch(addCustomerReviewActionCreator({ name, review }));
    try {
      await api.addReview({ name, review });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export { ActionType, addCustomerReviewActionCreator, getDetailRestaurantActionCreator, receiveDetailRestaurant, asyncAddCustomerReview };
