/* eslint-disable react/prop-types */
import Star from "./Star";

function JumbotronFavorite() {
  return (
    <div className="jumbotron-container overflow-hidden mt-9 max-h-96  grid md:grid-cols-[60%_40%] bg-gradient-to-r from-fuchsia-500 rounded-3xl">
      <img src="../../public/favoriteJumbotron.jpg" alt="Jumbotron" className="rounded-3xl h-50 object-cover  " loading="lazy" />
      <div className="hidden sm:flex items-center justify-start flex-col w-full sm:mt-9 ">
        <h1 className="text-black  text-3xl font-bold leading-normal p-2  ml-8">
          Your <span className="drop-shadow-2xl inline-block  p-1 animate-bounce rounded bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">Favorite</span> Restaurants!
        </h1>
        <a href="#favorite" className="px-5 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black font-semibold rounded-full hover:text-white hover:bg-gradient-to-r hover:border-transparent">
          {" "}
          Let`s Go!
        </a>
        <Star />
      </div>
    </div>
  );
}

export default JumbotronFavorite;