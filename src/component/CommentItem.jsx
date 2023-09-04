/* eslint-disable react/prop-types */

function CommentItem({ review }) {
  return (
    <div className="review m-1 inline-block bg-gradient-to-r from-fuchsia-100 p-4 rounded-lg shadow-md  ">
      <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
      <h4 className="text-gray-600">{review.review}</h4>
      <h5 className="text-sm text-gray-500">{review.date}</h5>
    </div>
  );
}

export default CommentItem;
