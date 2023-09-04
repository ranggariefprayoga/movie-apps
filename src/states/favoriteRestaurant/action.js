const ActionType = {
  RECEIVE_FAVORITE_RESTAURANT: "RECEIVE_FAVORITE_RESTAURANT",
  ADD_FAVORITE_RESTAURANT: "ADD_FAVORITE_RESTAURANT",
  REMOVE_FAVORITE_RESTAURANT: "REMOVE_FAVORITE_RESTAURANT",
};

function addRestaurantFavoriteActionCreator(restaurant) {
  return {
    type: ActionType.ADD_FAVORITE_RESTAURANT,
    payload: {
      restaurant,
    },
  };
}

function receiveFavoriteRestaurantActionCreator(restaurants) {
  return {
    type: ActionType.RECEIVE_FAVORITE_RESTAURANT,
    payload: {
      restaurants,
    },
  };
}

function asyncReceiveFavoriteRestaurants() {
  return async (dispatch) => {
    try {
      const data = JSON.parse(localStorage.getItem("favorite") ?? "[]");
      dispatch(receiveFavoriteRestaurantActionCreator(data));
    } catch (error) {
      console.log(error.message);
    }
  };
}

function asyncAddFavoriteRestaurant(restaurant) {
  return async (dispatch) => {
    try {
      const restaurantFavorites = JSON.parse(localStorage.getItem("favorite"));
      if (!restaurantFavorites || restaurantFavorites?.length == 0) {
        const data = JSON.stringify([restaurant]);
        localStorage.setItem("favorite", data);
        dispatch(addRestaurantFavoriteActionCreator(restaurant));
        console.log("restaurant favorit pertama");
      } else {
        restaurantFavorites.push(restaurant);
        const data = JSON.stringify(restaurantFavorites);
        localStorage.setItem("favorite", data);
        dispatch(addRestaurantFavoriteActionCreator(restaurant));
        console.log("restaurant favorit kedua");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

function asyncRemoveFavoriteRestaurant(id) {
  return async (dispatch) => {
    try {
      const restaurantFavorites = JSON.parse(localStorage.getItem("favorite"));
      const data = restaurantFavorites.filter((restaurant) => restaurant.id != id);
      localStorage.setItem("favorite", JSON.stringify(data));
      dispatch(receiveFavoriteRestaurantActionCreator(data));
      console.log("restaurant favorit remove");
    } catch (error) {
      console.log(error.message);
    }
  };
}

export { ActionType, asyncReceiveFavoriteRestaurants, receiveFavoriteRestaurantActionCreator, addRestaurantFavoriteActionCreator, asyncAddFavoriteRestaurant, asyncRemoveFavoriteRestaurant };
