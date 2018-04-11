import React from "react";
import Redirect from "react-router-dom";
import { makeChange } from "../../util/item_util";

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemId: this.props.itemId,
      rating: 0,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview(this.state, this.props.item.id);
    this.setState({
      itemId: this.props.item.id,
      rating: 0,
      body: "" });
  }

  updateField(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  updateRating(){
    return (e) => this.setState({rating: e.target.value});
  }

  render(){
    return (
      <div className="review-form">
        <h3 className="review-head">Leave a Review?</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="review-box">
            <label className="review-body">
              <textarea className="review-body"
                value={this.state.body}>
                {this.updateField("body")}
              </textarea>
            </label>

         <button className="leave-review">Leave Review</button>
         </div>
       </form>
     </div>
   );
  }
}

export default ReviewForm;
