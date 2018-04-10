import React from "react";
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review }) => {
  const reviewer = review.reviewer;
  return <li className="review">
    <p>{review.rating}</p>
    <p>{review.body}</p>
    <p>{reviewer.username}</p>
    <img src={reviewer.imgUrl} className="reviewer-item-img"/>
  </li>;
};

export default ReviewIndexItem;
