import CommentItem from "./CommentItem";

/* eslint-disable react/prop-types */
function CommentList({ customerReviews }) {
  return (
    <>
      {customerReviews.map((review, idx) => (
        <CommentItem key={idx} review={review} />
      ))}
    </>
  );
}

export default CommentList;
