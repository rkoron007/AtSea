import React from "react";
import ReviewIndexItem from "./review_index_items";
import { Route } from 'react-router-dom';

class ReviewsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchReviews(this.props.itemId);
  }

  reviewCount(){
    return this.props.reviews.length;
  }

  render(){
    if (!this.props.reviews) {
      return null;
    }


    return(
      <div className="review-index">
        <div className="review-index-main">
          <div className="review-header">
            <h3>Reviews {this.reviewCount()}</h3>
          </div>
          <ul className="review-list">
            {this.props.reviews.map(
              review =>
              <ReviewIndexItem
                key={review.id}
                review={review}
              />)};
          </ul>
        </div>
      </div>
    );
  }

}


export default ReviewsIndex;
