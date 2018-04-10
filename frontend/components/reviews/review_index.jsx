import React from "react";
import ReviewIndexItem from "./review_index_items";
import { Route } from 'react-router-dom';

class ReviewsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchReviews(this.props.itemId);
  }

  render(){
    if (!this.props.reviews) {
      return null;
    }

    return(
      <div className="review-index">
        <div className="review-index-main">
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
