/* eslint-disable react/prop-types */

function CommentItem({ review }) {
  return (
    <>
      <div className="review">{review.name}</div>
      <div className="date"></div>
    </>
  );
}

export default CommentItem;
