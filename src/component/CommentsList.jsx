import CommentItem from "./CommentItem";

/* eslint-disable react/prop-types */
function CommentList({ customerReviews }) {
  return (
    <>
      {customerReviews.map((review) => (
        <CommentItem key={review.name} review={review} />
      ))}
    </>
  );
}

export default CommentList;
