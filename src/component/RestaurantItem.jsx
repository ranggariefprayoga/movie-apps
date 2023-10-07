/* eslint-disable react/prop-types */
import BASE_IMAGE_URL from "../config/api-endpoint";
import { Link } from "react-router-dom";

function RestaurantItem({ restaurant }) {
  return (
    <>
      <div className="w-full shadow-2xl bg-[#394867]  rounded-lg overflow-hidden ">
        <div className="relative">
          <div className="image-card relative">
            <img src={`${BASE_IMAGE_URL}/${restaurant.pictureId}`} alt={restaurant.name} loading="lazy" className="image  w-full" />
          </div>
          <div className="name p-2 top-5 absolute inline-block left-5 bg-[#212A3E]  text-black font-bold rounded shadow-2xl ">
            <p className="text-white">{restaurant.name}</p>
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
              <span className="text-white">Rating {restaurant.rating}</span>
            </p>
            <Link to={`/detail/${restaurant.id}`} className="px-5 py-2 mt-1 text-center font-semibold rounded hover:bg-[#838c9b] text-black  bg-[#9BA4B5] focus:outline-none hover:border-[#212A3E] ">
              Lihat detail{" "}
            </Link>
          </h5>
          <p className="line-clamp-4 text-white text-justify ">{restaurant.description}</p>
        </div>
      </div>
    </>
  );
}

export default RestaurantItem;
