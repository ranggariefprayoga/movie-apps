/* eslint-disable react/prop-types */
function Foods({ name }) {
  return (
    <div className="foods flex gap-2 p-1">
      <img src="../../public/foods.svg" alt="" className="w-6 h-6" />
      <p className="bg-pink-200">{name}</p>
    </div>
  );
}

export default Foods;
