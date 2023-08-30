import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveAllRestaurants } from "../states/ListRestaurants/action";
import RestaurantsList from "../component/RestaurantsList";

function HomePage() {
  const { listRestaurants = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveAllRestaurants());
  }, [dispatch]);

  return (
    <div className="home-page">
      <RestaurantsList restaurants={listRestaurants} />
    </div>
  );
}

export default HomePage;
