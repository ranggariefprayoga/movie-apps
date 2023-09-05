/* eslint-disable react/prop-types */
function Drinks({ name }) {
  return (
    <div className="drinks flex  gap-2 p-1">
      <img src="../../public/drinks.svg" alt="Drinks" className="w-6 h-6" loading="lazy" />
      <p>{name}</p>
    </div>
  );
}

export default Drinks;
