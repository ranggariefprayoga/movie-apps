import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.classList.remove("open");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function Navigation() {
  const navigate = useNavigate();
  const wrapperRef = useRef();
  useOutsideAlerter(wrapperRef);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      wrapperRef.current.classList.remove("open");
    });
  }, []);

  const toggleMenu = () => {
    wrapperRef.current.classList.toggle("open");
  };

  const handleHome = () => {
    navigate("/");
    wrapperRef.current.classList.remove("open");
  };

  const handleFavorite = () => {
    navigate("/favorite");
    wrapperRef.current.classList.remove("open");
  };

  return (
    <div className="grid grid-cols-2 fixed px-8 h-auto bg-[#212A3E] text-white shadow-2xl z-50 w-full" ref={wrapperRef}>
      <div className="flex justify-start items-center text-white">
        <img src="/restaurants.svg" alt="Restaurants" className="image-restaurant w-12 h-4/5  rounded " loading="lazy" />
        <h1 className="text-l sm:text-3xl font-bold uppercase px-2 no-select">Restaurants</h1>
      </div>
      <nav className="flex justify-end items-center w-full gap-2">
        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer w-9 h-9  sm:hidden">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
        <div className="menu-items" onClick={handleHome}>
          <a href="/" className="link-home">
            Home
          </a>
          <a href="/favorite" className="link-favorite" onClick={handleFavorite}>
            Favorite
          </a>
        </div>
      </nav>
    </div>
  );
}
