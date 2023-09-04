/* eslint-disable react/prop-types */
import Drinks from "./Drinks";
import Foods from "./Foods";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

function DetailMenu({ foods, drinks }) {
  return (
    <div className=" container">
      <h1 className="font-menu font-bold text-center text-4xl mt-7">Menus!</h1>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper max-w-3xl gap-2 mt-6">
        <SwiperSlide className=" bg-white foods grid grid-rows-[0.5fr_2fr] sm:grid-rows-1 sm:grid-cols-[0.8fr_2fr] w-full shadow-2xl rounded-lg">
          {" "}
          <div className="bg-gradient-to-r from-fuchsia-500 info flex justify-center items-center sm:flex-col p-2">
            <img src="../../public/restaurants.svg" alt="" className="w-6 h-6" />
            <h2 className="font-menu font-bold self-center text-xl">Our Foods!</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] ">
            {foods.map((food) => (
              <Foods key={food.name} name={food.name} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white drinks grid grid-rows-[0.5fr_2fr] sm:grid-rows-1 sm:grid-cols-[0.8fr_2fr] w-full shadow-2xl rounded-lg">
          {" "}
          <div className="bg-gradient-to-r from-fuchsia-500 info flex justify-center items-center sm:flex-col p-2">
            <img src="../../public/restaurants.svg" alt="" className="w-6 h-6" />
            <h2 className="font-menu font-bold self-center text-xl">Our Drinks!</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr]  ">
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
