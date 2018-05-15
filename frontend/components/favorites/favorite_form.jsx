import React from "react";

class FavoriteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      liked: this.props.isFavorite
    };
    this.handleClick = this.handleClick.bind(this);
  }

  whatColor(){
    let heart = document.getElementById("heart");
    if (this.state.liked){
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  }

  componentDidMount(){
    this.whatColor();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.isFavorite !== this.props.isFavorite){
      this.setState({liked: nextProps.isFavorite});
      this.whatColor();
    }
  }

  handleClick(){
    let heart = document.getElementById("heart");
    if (this.state.liked){
      this.props.deleteFavorite(this.props.itemId);
    } else {
      this.props.createFavorite(this.props.itemId);
    }
    this.setState({liked: !this.state.liked});
    this.whatColor();
  }

  render(){
    return(
      <div className="item-show-favs">
        <div className="item-show-circle">
        <i className="fa fa-heart"
          onClick={() =>this.handleClick()}
          aria-hidden="true" id="heart"></i>
        </div>
      </div>
    );
  }
}

export default FavoriteForm;
