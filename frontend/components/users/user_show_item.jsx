import React from "react";
import {Link} from "react-router-dom";

class UserShowItem extends React.Component{
  editButtonVisible(){
    if (this.props.currentUser.id === this.props.item.id) {
      return(

        <Link to={`items/${this.props.item.id}/edit`}></Link>
      );
    } else {
      return(
        null
      );
    }
  }

  render(){
    const { item, currentUser } = this.props;
    debugger
    return(
      <li className="user-item">
        <img src={item.imageUrl} className="show-item-img"/>
        <div className="item-info">
          <h5>{item.title}</h5>
          <p>{item.price}</p>
        </div>
        <div className="edit-button">
          {this.editButtonVisible()}
        </div>
      </li>
    );
  }
}

export default UserShowItem;
