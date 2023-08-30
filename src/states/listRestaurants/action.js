import api from "../../utils/api";

const ActionType = {
  RECEIVE_RESTAURANTS: "RECEIVE_ALL_RESTAURANTS",
};

function receviveAllRestaurantsActionCreator(restaurants) {
  return {
    type: ActionType.RECEIVE_RESTAURANTS,
    payload: {
      restaurants,
    },
  };
}

function receiveAllRestaurants() {
  return async (dispatch) => {
    try {
      const restaurants = await api.getAllRestaurants();
      dispatch(receviveAllRestaurantsActionCreator(restaurants));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export { ActionType, receviveAllRestaurantsActionCreator, receiveAllRestaurants };
