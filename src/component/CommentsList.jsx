import CommentItem from "./CommentItem";

/* eslint-disable react/prop-types */
function CommentList({ customerReviews }) {
  return (
    <div className="bg-white gap-2 p-4 rounded-lg shadow-md grid sm:grid-cols-2">
      {customerReviews.map((review, idx) => (
        <CommentItem key={idx} review={review} />
      ))}
    </div>
  );
}

export default CommentList;
