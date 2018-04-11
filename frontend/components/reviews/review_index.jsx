import React from "react";
import ReviewIndexItem from "./review_index_items";
import { Route } from 'react-router-dom';

class ReviewsIndex extends React.Component{

  reviewCount(){
    return 0 || this.props.reviews.length;
  }

  ratingAverage(){
    let sum = 0;
    this.props.reviews.forEach((review) => (sum += review.rating));
      if (this.props.reviews.length){
        return sum / this.props.reviews.length;
      } else {
        return "";
      }
  }

  render(){
    if (!this.props.reviews) {
      return null;
    }

    return(
      <div className="review-index">
        <div className="review-index-main">
          <div className="review-header">
            <h3>Reviews {this.ratingAverage()}</h3><p>({this.reviewCount()})</p>
          </div>
          <ul className="review-list">
            {this.props.reviews.map(
              review =>
              <ReviewIndexItem
                key={review.id}
                review={review}
                deleteReview={this.props.deleteReview}
                currentUser={this.props.currentUser}
              />)}
          </ul>
        </div>
      </div>
    );
  }
}


export default ReviewsIndex;
