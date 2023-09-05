export default function Navigation() {
  return (
    <div className="grid grid-cols-2 fixed px-8 h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl z-50 w-full text-black">
      <div className="flex justify-start items-center">
        <img src="./asset/restaurants.svg" alt="Restaurants" className="w-12 h-4/5  rounded " loading="lazy" />
        <h1 className="text-l sm:text-3xl font-bold uppercase px-2 no-select">Restaurants</h1>
      </div>
      <nav className="flex justify-end items-center w-full gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer w-9 h-9  sm:hidden">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
        <div className="menu-list gap-4 hidden sm:flex sm:justify-end sm:w-full sm:h-full items-center">
          <a href="/" className="hover:text-white">
            Home
          </a>
          <a href="/favorite" className="hover:text-white">
            Favorite
          </a>
        </div>
        <svg className=" cursor-pointer w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </nav>
    </div>
  );
}
