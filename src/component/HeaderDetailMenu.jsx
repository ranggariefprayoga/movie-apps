/* eslint-disable react/prop-types */
import BASE_IMAGE_URL from "../config/api-endpoint";

function HeaderDetailMenu({ detailRestaurant }) {
  //   console.log(detailRestaurant);
  return (
    <div className="header-detail overflow-hidden bg-gradient-to-r from-fuchsia-500 grid  sm:grid-cols-2 rounded-lg mt-9 gap-6">
      <div className="image ">
        <img src={`${BASE_IMAGE_URL}/${detailRestaurant.pictureId}`} alt={detailRestaurant.name} className="rounded-lg w-full h-96 object-cover" />
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </form>
      </div>
    </div>
  );
}

export default HeaderDetailMenu;
