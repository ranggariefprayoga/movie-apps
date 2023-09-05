/* eslint-disable react/prop-types */
// import { useSelector } from "react-redux";
import { useState } from "react";
import BASE_IMAGE_URL from "../config/api-endpoint";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncAddFavoriteRestaurant, asyncRemoveFavoriteRestaurant } from "../states/favoriteRestaurant/action";

function HeaderDetailMenu({ detailRestaurant }) {
  const { id } = useParams();
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite") ?? "[]")
      .map((v) => v.id)
      .includes(id)
  );
  const dispatch = useDispatch();

  const handleFavoriteRestaurant = (e) => {
    e.preventDefault();
    if (favorite) {
      dispatch(asyncRemoveFavoriteRestaurant(id));
      setFavorite(false);
    } else {
      dispatch(asyncAddFavoriteRestaurant(detailRestaurant));
      setFavorite(true);
    }
  };

  return (
    <div className="header-detail overflow-hidden bg-gradient-to-r from-fuchsia-500 grid  sm:grid-cols-2 rounded-lg mt-9 gap-6">
      <div className="image ">
        <img src={`${BASE_IMAGE_URL}/${detailRestaurant.pictureId}`} loading="lazy" alt={detailRestaurant.name} className="rounded-lg w-full h-96 object-cover" />
      </div>
      <div className="content flex gap-2 flex-col p-2 mt-4">
        <h3 className="name font-semibold leading-5 text-lg">
          Name
          <p className="font-normal text-base">{detailRestaurant.name}</p>
        </h3>
        <h3 className="address font-semibold leading-5">
          Address
          <p className="font-normal">{detailRestaurant.address}</p>
        </h3>
        <h3 className="city font-semibold leading-5">
          City
          <p className="font-normal">{detailRestaurant.city}</p>
        </h3>
        <h3 className="rating flex gap-1 mt-2">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-black-500 transition ease-in-out fill-yellow-500 hover:scale-125 duration-800">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>{" "}
          <p className="font-normal">{detailRestaurant.rating}</p>
        </h3>
        <form className="icon">
          {favorite ? (
            <>
              <h3 className="font-semibold leading-5 mt-4">Remove From Favorite!</h3>
              <svg onClick={handleFavoriteRestaurant} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-12 h-12 cursor-pointer transition-all duration-200 hover:scale-125">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </>
          ) : (
            <>
              <h3 className="font-semibold leading-5 mt-4">Add to Favorite!</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 cursor-pointer transition-all duration-200 hover:scale-125"
                onClick={handleFavoriteRestaurant}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default HeaderDetailMenu;
