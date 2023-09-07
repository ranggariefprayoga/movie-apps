/* eslint-disable react/prop-types */

import { useState } from "react";
import CommentList from "./CommentsList";

function AddReview({ handleAddCustomerReview, customerReviews }) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  function addReview(e) {
    e.preventDefault();
    if (review.trim() && name.trim()) {
      handleAddCustomerReview({ name, review });
      setName("");
      setReview("");
    }
  }

  function handleNameChange({ target }) {
    if (target.value.length <= 50) {
      setName(target.value);
      console.log(name);
    }
  }

  function handleReviewChange({ target }) {
    if (target.value.length <= 320) {
      setReview(target.value);
      console.log(review);
    }
  }

  return (
    <div className="review grid sm:grid-cols-[0.8fr_1fr] md:grid-cols-[1.2fr_2fr] mt-12 ">
      <form type="submit" onClick={addReview} className="mb-4 sm:mr-2  mx-auto p-4 bg-[#394867] rounded-lg shadow-md">
        <div className="icon flex justify-center gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
          <h1 className="text-lg font-semibold text-white">Add Your Review!</h1>
        </div>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Your Name" className="mt-4 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-400" />
        <input type="text" value={review} onChange={handleReviewChange} placeholder="Your Review" className="mt-2 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-400" />
        <button className="mt-4 px-4 py-2  rounded-md hover:bg-[#838c9b] text-black  bg-[#9BA4B5] focus:outline-none ">Add Review</button>
      </form>
      <CommentList customerReviews={customerReviews} />
    </div>
  );
}

export default AddReview;
