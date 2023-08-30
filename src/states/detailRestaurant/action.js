import api from "../../utils/api";

const ActionType = {
  GET_DETAIL_RESTAURANT: "GET_DETAIL_RESTAURANT",
};

function getDetailRestaurantActionCreator(restaurant) {
  return {
    type: ActionType.GET_DETAIL_RESTAURANT,
    payload: {
      restaurant,
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

export { ActionType, getDetailRestaurantActionCreator, receiveDetailRestaurant };
