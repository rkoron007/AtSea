import React from "react";
import {Link} from "react-router-dom";
import UserShowItem from "./user_show_item";

class UserShowList extends React.Component{
  render(){
    if (!this.props){
      return null;
    }
    console.log(this.props.items);
    return(
      <ul className="user-item-list">
        {this.props.items.map(item =>
          <UserShowItem key={item.id}
            item={item}
            currentUser={this.props.currentUser}/>
        )}
      </ul>
    );
  }
}

export default UserShowList;
