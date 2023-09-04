/* eslint-disable react/prop-types */
import Drinks from "./Drinks";
import Foods from "./Foods";

function DetailMenu({ foods, drinks }) {
  return (
    <div className=" grid grid-cols-1 gap-2 mt-6">
      <h1 className="font-menu font-bold text-center text-4xl">Menus!</h1>
      <div className=" foods grid grid-rows-[0.5fr_2fr] sm:grid-rows-1 sm:grid-cols-[0.8fr_2fr] w-full shadow-2xl rounded-lg ">
        <div className="info flex justify-center items-center sm:flex-col p-2">
          <img src="../../public/restaurants.svg" alt="" className="w-6 h-6" />
          <h2 className="font-menu font-bold self-center text-xl">Our Foods!</h2>
        </div>
        <div className="grid grid-cols-[1fr_1fr]">
          {foods.map((food) => (
            <Foods key={food.name} name={food.name} />
          ))}
        </div>
      </div>
      <div className=" drinks grid grid-rows-[0.5fr_2fr] sm:grid-rows-1 sm:grid-cols-[0.8fr_2fr] w-full shadow-2xl rounded-lg ">
        <div className="info flex justify-center items-center sm:flex-col p-2">
          <img src="../../public/restaurants.svg" alt="" className="w-6 h-6" />
          <h2 className="font-menu font-bold self-center text-xl">Our Drinks!</h2>
        </div>
        <div className="grid grid-cols-[1fr_1fr]">
          {drinks.map((drink) => (
            <Drinks key={drink.name} name={drink.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailMenu;
