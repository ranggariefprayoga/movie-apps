/* eslint-disable react/prop-types */
import Star from "./Star";

function Jumbotron() {
  return (
    <div className="jumbotron-container overflow-hidden mt-9 max-h-96  grid md:grid-cols-[60%_40%] shadow-2xl bg-[#394867]  rounded-3xl">
      <img src="/hero.jpg" alt="Jumbotron" className="rounded-3xl h-50 object-cover  " loading="lazy" />
      <div className="hidden sm:flex items-center justify-start flex-col w-full sm:mt-9 ">
        <h1 className="text-white  text-3xl font-bold leading-normal p-2  ml-8">
          Find your <span className="drop-shadow-2xl inline-block  p-1 animate-bounce rounded bg-clip-text text-transparent bg-[#F1F6F9]  ">restaurant</span> and add it to favorites!
        </h1>
        <a href="#search" className="px-5 py-2 font-semibold rounded hover:bg-[#838c9b] text-black  bg-[#9BA4B5] focus:outline-none hover:border-[#212A3E]">
          {" "}
          Get Started
        </a>
        <Star />
      </div>
    </div>
  );
}

export default Jumbotron;
