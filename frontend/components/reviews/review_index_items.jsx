import React from "react";
import { Link } from 'react-router-dom';
import { parseTime } from '../../util/review_util';

const ReviewIndexItem = ({ review }) => {
  const reviewer = review.reviewer;
  return (
    <li className="review">
      <div className="reviewer-info">
        <Link to={`/users/${reviewer.id}`}>
          <img src={reviewer.imgUrl} className="reviewer-item-img"/>
          <p>Reviewed by</p>
          <p>{reviewer.username}</p>
        </Link>
      </div>
      <div className="review-info">

        <div className="rating-date">
          <p>{review.rating}</p>
          <p>{parseTime(review.createdAt)}</p>
        </div>

        <div className="review-body">
          <p>{review.body}</p>
        </div>
      </div>
    </li>
  );
};


export default ReviewIndexItem;
