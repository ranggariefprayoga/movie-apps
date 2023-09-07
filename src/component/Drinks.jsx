/* eslint-disable react/prop-types */
function Drinks({ name }) {
  return (
    <div className="drinks flex  gap-2 p-1">
      <img src="/drinks.svg" alt="Drinks" className="image-restaurant w-6 h-6" loading="lazy" />
      <p className="text-white">{name}</p>
    </div>
  );
}

export default Drinks;
