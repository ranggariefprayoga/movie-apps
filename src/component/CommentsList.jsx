import CommentItem from "./CommentItem";

/* eslint-disable react/prop-types */
function CommentList({ customerReviews }) {
  return (
    <div className=" grid sm:grid-cols-[1fr-1fr]">
      <div className="items ">
        {customerReviews.map((review, idx) => (
          <CommentItem key={idx} review={review} />
        ))}
      </div>
    </div>
  );
}

export default CommentList;
