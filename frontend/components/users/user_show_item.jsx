import React from "react";
import {Link} from "react-router-dom";
import { makeChange } from "../../util/item_util";

class UserShowItem extends React.Component{
  editButtonVisible(){
    if (this.props.currentUser.id === this.props.item.userId) {
      return(
        <Link to={`/items/${this.props.item.id}/edit`}
          className="edit-button">
          Edit Item
        </Link>
      );
    }
  }

  render(){
    const { item, currentUser } = this.props;
    if (!currentUser){
      return null;
    }
    return(
      <li className="user-item">
        <img src={item.imageUrl} className="show-item-img"/>
        <div className="item-info">
          <h5>{item.title}</h5>
          <p>{makeChange(item.price)}</p>
        </div>
        <div className="item-buttons">
          <Link to={`/items/${this.props.item.id}/`}
            className="view-item">View Item
          </Link>
          {this.editButtonVisible()}
        </div>
      </li>
    );
  }
}

export default UserShowItem;
