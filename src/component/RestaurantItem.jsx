/* eslint-disable react/prop-types */
import BASE_IMAGE_URL from "../config/api-endpoint";

function RestaurantItem({ restaurant }) {
  return (
    <>
      <h1>{restaurant.name}</h1>
      <img src={`${BASE_IMAGE_URL}/${restaurant.pictureId}`} alt="" />
      <p>{restaurant.description}</p>
    </>
  );
}

export default RestaurantItem;
