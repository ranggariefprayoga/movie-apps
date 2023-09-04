const ActionType = {
  ADD_FAVORITE_RESTAURANT: "ADD_FAVORITE_RESTAURANT",
};

function addRestaurantFavoriteActionCreator(restaurant) {
  return {
    type: ActionType.ADD_FAVORITE_RESTAURANT,
    payload: {
      restaurant,
    },
  };
}

export { ActionType, addRestaurantFavoriteActionCreator };
