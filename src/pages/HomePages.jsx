import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSearchRestaurants, receiveAllRestaurants } from "../states/ListRestaurants/action";
import RestaurantsList from "../component/RestaurantsList";
import Jumbotron from "../component/Jumbotron";
import Loading from "../component/Loading";
// import SearchQuery from "../component/SearchQuery";

function HomePage() {
  const { listRestaurants = [] } = useSelector((states) => states);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveAllRestaurants());
  }, [dispatch]);

  const handleSearch = ({ target }) => {
    setQuery(target.value);
    dispatch(asyncSearchRestaurants(target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncSearchRestaurants(query));
  };

  return (
    <div className="home-page">
      <Jumbotron />
      {/* <SearchQuery handleSubmit={handleSubmit} handleSearch={handleSearch} /> */}
      <div className="search-query flex flex-col gap-2 mt-8" id="search">
        <h2 className="  inline-block p-1 animate-bounce text-3xl font-bold leading-normal text-center drop-shadow-2xl underline underline-offset-8 decoration-indigo-500">Find, Now!</h2>
        <form onSubmit={handleSubmit} className="mb-6 mt-4 flex">
          <input type="text" onChange={handleSearch} placeholder="Category, Name, Menu" className="w-full h-11 p-2 mr-6  rounded  border-radius border-solid border-2 " />
          <button type="submit" className="h-11 px-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black font-semibold rounded hover:text-white hover:bg-gradient-to-r hover:border-transparent">
            Search
          </button>
        </form>
      </div>
      {listRestaurants.length > 0 ? <RestaurantsList restaurants={listRestaurants} /> : <Loading />}
    </div>
  );
}

export default HomePage;
