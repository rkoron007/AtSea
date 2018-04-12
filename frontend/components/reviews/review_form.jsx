import React from "react";
import Redirect from "react-router-dom";
import { makeChange } from "../../util/item_util";
import Rater from 'react-rater';


class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rating: 0,
      body: "",
      hover:false,
      hoverV: 0,
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
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
      rating: 0,
      body: "" });
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateRating(updatedRating){
    return (e) => this.setState({rating: updatedRating});
  }

  handleHover(i){
    return () => this.setState({hover: true, hoverV: i});
  }

  handleHoverLeave(){
    this.setState({hover: false});
  }

  ratingStars(){
    let starArr = [];

    for (let i = 1; i < 6; i++) {
      let id, maxRating;
      maxRating = this.state.hover ? this.state.hoverV: this.state.rating;
      if (i <= maxRating) id ="full";

      starArr.push(
        <i
          key={i}
          className="fa fa-star"
          id={id}
          onMouseEnter={this.handleHover(i)}
          onMouseLeave={this.handleHoverLeave}
          aria-hidden="true"
          onClick={this.updateRating(i)}>
        </i>);
    }

    return starArr;
  }

  renderErrors() {
    if (this.props.errors){
    return (
      <ul className="review-errors">
        {this.props.errors.map((error, i) => (
          <li key = {`${i}`}>{error}</li>))}
      </ul>
        );
      }
    }


  render(){

    return (
      <div className="review-form-outer">
        <h3 className="review-head">Leave a Review</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="review-box">
            <div className="review-box-header">
              <p>How much did you enjoy this nautical product?</p>
              <div className="stars">
                {this.ratingStars()}
              </div>
            </div>
            {this.renderErrors()}
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
