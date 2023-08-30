/* eslint-disable react/prop-types */

import { useState } from "react";

function AddReview({ handleAddCustomerReview }) {
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
    <form type="submit" onClick={addReview}>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="text" value={review} onChange={handleReviewChange} />
      <button>tambah review</button>
    </form>
  );
}

export default AddReview;
