import React from "react";
import { Link } from 'react-router-dom';
import { parseTime, starCreator } from '../../util/review_util';


class ReviewIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleDeleteReview = this.handleDeleteReview.bind(this);
  }

  handleDeleteReview(reviewId){
    return () => this.props.deleteReview(reviewId);
  }


  render(){
    const review = this.props.review;
    const reviewer = review.reviewer;
    const currentUser = this.props.currentUser;

    if (!review){
      return null;
    }
    let removeButton;
      if (currentUser.id === review.authorId){
      removeButton = <button
        onClick={this.handleDeleteReview(review.id)}>
        Remove Review
      </button>;
      }
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
            <p>{starCreator(review.rating)}</p>
            <p>{parseTime(review.createdAt)}</p>
          </div>

          <div className="review-body">
            <p>{review.body}</p>
            {removeButton}
          </div>
        </div>
      </li>
    );
  }
}


export default ReviewIndexItem;
