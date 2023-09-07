/* eslint-disable react/prop-types */

function CommentItem({ review }) {
  return (
    <div className="review m-1 inline-block bg-gradient-to-r from-[#394867] text-white p-4 rounded-lg shadow-md ">
      <h3 className="text-lg font-semibold ">{review.name}</h3>
      <h4>{review.review}</h4>
      <h5 className="text-sm">{review.date}</h5>
    </div>
  );
}

export default CommentItem;
