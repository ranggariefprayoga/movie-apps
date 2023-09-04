/* eslint-disable react/prop-types */

function CommentItem({ review }) {
  return (
    <div className="review">
      <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
      <h4 className="text-gray-600">{review.review}</h4>
      <h5 className="text-sm text-gray-500">{review.date}</h5>
    </div>
  );
}

export default CommentItem;
