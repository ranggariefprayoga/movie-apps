import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddCustomerReview, receiveDetailRestaurant } from "../states/detailRestaurant/action";
import { useParams } from "react-router-dom";
import CommentList from "../component/CommentsList";
import AddReview from "../component/AddReview";

function DetailPage() {
  const { id } = useParams();
  const { detailRestaurant = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveDetailRestaurant(id));
  }, [id, dispatch]);

  if (!detailRestaurant) {
    return null;
  }

  const handleAddCustomerReview = ({ name, review }) => {
    dispatch(asyncAddCustomerReview({ name, review }));
  };

  return (
    <>
      <div className="detail-page-container" key={detailRestaurant.id}>
        {detailRestaurant.id}
      </div>
      <AddReview detailRestaurant={detailRestaurant} handleAddCustomerReview={handleAddCustomerReview} />
      <CommentList customerReviews={detailRestaurant.customerReviews} />
    </>
  );
}

export default DetailPage;
