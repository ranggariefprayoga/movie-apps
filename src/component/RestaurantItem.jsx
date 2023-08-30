/* eslint-disable react/prop-types */
import BASE_IMAGE_URL from "../config/api-endpoint";

function RestaurantItem({ restaurant }) {
  console.log(restaurant.id);
  return (
    <>
      <h1>{restaurant.name}</h1>;
      <img src={`${BASE_IMAGE_URL}/${restaurant.pictureId}`} alt="" />
    </>
  );
}

export default RestaurantItem;
