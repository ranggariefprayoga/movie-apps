/* eslint-disable react/prop-types */
import BASE_IMAGE_URL from "../config/api-endpoint";
import { Link } from "react-router-dom";

function RestaurantItem({ restaurant }) {
  return (
    <>
      <h1>{restaurant.name}</h1>
      <img src={`${BASE_IMAGE_URL}/${restaurant.pictureId}`} alt="" />
      <p>{restaurant.description}</p>
      <Link to={`/detail/${restaurant.id}`}>Lihat Detail</Link>
    </>
  );
}

export default RestaurantItem;
