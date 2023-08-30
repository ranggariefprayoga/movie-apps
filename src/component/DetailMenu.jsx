/* eslint-disable react/prop-types */
import Drinks from "./Drinks";
import Foods from "./Foods";

function DetailMenu({ foods, drinks }) {
  return (
    <>
      <div className="foods">
        {foods.map((food) => (
          <Foods key={food.name} name={food.name} />
        ))}
      </div>
      <div className="drinks">
        {drinks.map((drink) => (
          <Drinks key={drink.name} name={drink.name} />
        ))}
      </div>
    </>
  );
}

export default DetailMenu;
