/* eslint-disable react/prop-types */
import Star from "./Star";

function JumbotronFavorite() {
  return (
    <div className="jumbotron-container overflow-hidden mt-2 max-h-96  grid md:grid-cols-[60%_40%] bg-[#394867]  rounded-3xl">
      <div className="image-container grid place-items-start">
        <img src="/favoriteJumbotron.jpg" alt="Jumbotron" className="rounded-3xl object-cover top-0 " loading="lazy" />
      </div>
      <div className="hidden sm:flex items-center justify-start flex-col w-full sm:mt-9 ">
        <h1 className="text-white  text-3xl font-bold leading-normal p-2  ml-8">
          Your <span className="drop-shadow-2xl inline-block  p-1 animate-bounce rounded bg-clip-text text-transparent bg-[#F1F6F9] ">Favorite</span> Restaurants!
        </h1>
        <a href="#favorite" className="px-5 py-2 font-semibold rounded hover:bg-[#838c9b] text-black  bg-[#9BA4B5] focus:outline-none hover:border-[#212A3E]">
          {" "}
          Let`s Go!
        </a>
        <Star />
      </div>
    </div>
  );
}

export default JumbotronFavorite;
