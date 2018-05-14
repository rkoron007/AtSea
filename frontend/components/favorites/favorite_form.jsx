import React from "react";

class FavoriteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      liked: this.props.isFavorite
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    let heart = document.getElementById("heart");
    if (this.state.liked){
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  }

  handleClick(){
    let heart = document.getElementById("heart");

    if (this.state.liked){
      this.props.deleteFavorite();
      heart.style.color = "grey";
    } else {
      this.props.createFavorite(this.props.itemId);
      heart.style.color = "red";
    }
  }

  render(){
    return(
      <div>
        <i className="fa fa-heart"
          onClick={() =>this.handleClick()}
          aria-hidden="true" id="heart"></i>
      </div>
    );
  }
}

export default FavoriteForm;
