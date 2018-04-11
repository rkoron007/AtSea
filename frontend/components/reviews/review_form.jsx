import React from "react";
import Redirect from "react-router-dom";
import { makeChange } from "../../util/item_util";


class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rating: 5,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const review = {
      item_id: this.props.itemId,
      rating: this.state.rating,
      body: this.state.body,
    };
    this.props.createReview(review);
    this.setState({
      rating: 5,
      body: "" });
  }

  updateField(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  updateRating(updatedRating){
    return (e) => this.setState({rating: e.target.value});
  }

  ratingStars(){
    let starArr = [];

    for (let i = 1; i < 6; i++) {
      const rating = ( i <= this.state.rating ? "full" : "empty");

      starArr.push(
        <i
          key={i}
          className="fa fa-star"
          id="rating"
          aria-hidden="true"
          onClick={this.updateRating(i)}>
        </i>);
    }

    return starArr;
  }

  render(){
    return (
      <div className="review-form-outer">
        <h3 className="review-head">Leave a Review</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="review-box">
            <div className="review-box-header">
              <p>How much did you Enjoy this nautical product?</p>
              <div className="stars">
                {this.ratingStars()}
              </div>
            </div>
            <label className="review-body">
              <textarea className="review-body-input"
                value={this.state.body}
                onChange={this.updateField("body")} required>
              </textarea>
            </label>
              <button className="leave-review">Leave Review
              </button>
         </div>
       </form>
     </div>
   );
  }
}

export default ReviewForm;
