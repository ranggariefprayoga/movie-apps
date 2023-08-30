/* eslint-disable react/prop-types */

function CommentItem({ review }) {
  return (
    <>
      <div className="name">{review.name}</div>
      <div className="review">{review.review}</div>
      <div className="date">{review.date}</div>
    </>
  );
}

export default CommentItem;
