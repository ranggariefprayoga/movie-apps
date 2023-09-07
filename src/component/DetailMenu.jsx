/* eslint-disable react/prop-types */
import Drinks from "./Drinks";
import Foods from "./Foods";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Pagination, Navigation } from "swiper/modules";

function DetailMenu({ foods, drinks }) {
  return (
    <div className=" container">
      <h1 className="font-menu font-bold text-center text-4xl mt-7 text-white">Menus! (Swipe)</h1>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards, Pagination, Navigation]} loop={true} className="mySwiper max-w-3xl gap-2 mt-6">
        <SwiperSlide className=" bg-[#394867] foods grid grid-rows-[0.5fr_2fr] sm:grid-rows-1 sm:grid-cols-[0.8fr_2fr] w-full shadow-xl rounded-lg">
          {" "}
          <div className="bg-gradient-to-r from-indigo-200  flex justify-center items-center sm:flex-col p-2">
            <img src="/restaurants.svg" alt={foods.name} loading="lazy" className=" w-6 h-6" />
            <h2 className="font-menu font-bold self-center text-xl">Our Foods!</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] p-4 ">
            {foods.map((food) => (
              <Foods key={food.name} name={food.name} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#394867] drinks grid grid-rows-[0.5fr_2fr] sm:grid-rows-1 sm:grid-cols-[0.8fr_2fr] w-full shadow-xl rounded-lg">
          {" "}
          <div className=" bg-gradient-to-r from-indigo-200 flex justify-center items-center sm:flex-col p-2">
            <img src="/restaurants.svg" alt={foods.name} loading="lazy" className=" w-6 h-6" />
            <h2 className="font-menu font-bold self-center text-xl">Our Drinks!</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] p-4 ">
            {drinks.map((drink) => (
              <Drinks key={drink.name} name={drink.name} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default DetailMenu;
