import BASE_IMAGE_URL from "../config/api-endpoint";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
function FavoriteRestaurantList({ favoriteRestaurant }) {
  return (
    <div className="restaurants grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-9" id="favorite">
      {favoriteRestaurant.map((restaurant) => (
        <>
          <div className="w-full shadow-2xl rounded-lg overflow-hidden" key={restaurant.id}>
            <div className="relative">
              <div className="image-card relative">
                <img src={`${BASE_IMAGE_URL}/${restaurant.pictureId}`} alt={restaurant.name} loading="lazy" className="image  w-full" />
              </div>
              <div className="name p-2 top-5 absolute inline-block left-5 bg-black  text-black font-bold rounded bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl ">
                <p>{restaurant.name}</p>
              </div>
            </div>
            <div className=" p-4">
              <h5 className="rating mb-3 grid">
                <p className="flex items-center justify-center gap-1">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-black-500 transition ease-in-out fill-yellow-500 hover:scale-125 duration-800">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>{" "}
                  <span>Rating {restaurant.rating}</span>
                </p>
                <Link to={`/detail/${restaurant.id}`} className="text-center mt-4 px-4 py-2 bg-fuchsia-500 text-black rounded-md hover:bg-fuchsia-600 focus:outline-none focus:border-fuchsia-400 ">
                  Lihat detail{" "}
                </Link>
              </h5>
              <p className="line-clamp-4 ">{restaurant.description}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default FavoriteRestaurantList;
