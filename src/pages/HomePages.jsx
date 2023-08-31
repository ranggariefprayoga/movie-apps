import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSearchRestaurants, receiveAllRestaurants } from "../states/ListRestaurants/action";
import RestaurantsList from "../component/RestaurantsList";
import Jumbotron from "../component/Jumbotron";

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
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>
      {listRestaurants.length > 0 ? <RestaurantsList restaurants={listRestaurants} /> : "Restaurant ga jumpa bro !"}
    </div>
  );
}

export default HomePage;
