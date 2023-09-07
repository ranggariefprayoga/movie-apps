/* eslint-disable react/prop-types */
function Foods({ name }) {
  return (
    <div className="foods flex gap-2 p-1 ">
      <img src="/foods.svg" alt="Foods" className="image-restaurant w-6 h-6" loading="lazy" />
      <p className="inline text-white">{name}</p>
    </div>
  );
}

export default Foods;
