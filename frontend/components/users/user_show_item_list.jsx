import React from "react";
import {Link} from "react-router-dom";
import UserShowItem from "./user_show_item";

class UserShowList extends React.Component{
  render(){
    return(
      <ul className="user-item-list">
        {this.props.items.map(item =>
          <UserShowItem key={item.id} item={item}/>)}
      </ul>
    );
  }
}

export default UserShowList;
