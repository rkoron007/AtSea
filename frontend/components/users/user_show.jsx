import React from "react";
import {Link} from "react-router-dom";
import UserShowList from "./user_show_item_list";


class UserShow extends React.Component{

  componentDidMount(){
    return this.props.getUser(this.props.match.params.userId);
  }

  createButtonShow(){
    if (this.props.items[0]){
      if (this.props.currentUser.id === this.props.items[0].userId) {
        return(
          <Link to={`items/new`} className="create-item-btn">
            Create an Item!
          </Link>
        );
      }
    }
  }

  render(){
   const { user, items, currentUser } = this.props;
   if ( !user ) {
     return <div>No User Here!</div>;
     }
   return(
    <div className="user-show-all">
     <div className="user-show-header">
      <p>{user.username}s profile</p>
     </div>

      <div className="user-show-box">
        <div className="user-show-left">
           <img src={user.imgUrl} className="user-show-img"/>
           <h4>{user.username}</h4>
           <nav className="side-bar">
             <p>Favorites</p>
             <p>Followers</p>
             <p>Contact </p>
           </nav>
        </div>

        <div className="user-show-right-box">
          <div className="show-right">
              <div className="right-box-header">
                <h2>{user.username}s Profile</h2>
                {this.createButtonShow()}
              </div>
            <UserShowList items={items} currentUser={currentUser}/>
          </div>
        </div>
      </div>
    </div>
   );
 }
}


export default UserShow;
