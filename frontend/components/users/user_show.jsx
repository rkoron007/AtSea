import React from "react";
import {Link} from "react-router-dom";
import UserShowList from "./user_show_item_list";
import FavoriteIndex from "../favorites/favorite_index";

class UserShow extends React.Component{

  componentDidMount(){
    return this.props.getUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.getUser(nextProps.match.params.userId);
    }
  }

  createButtonShow(){
    if (this.props.user){
      if (this.props.currentUser.id === this.props.user.id) {
        return(
          <Link to={`/items/new`} className="create-item-btn">
            Create an Item!
          </Link>
        );
      }
    }
  }

  showFavorites(){
    return (
      null
    );
  }

  render(){
   const { user, items, currentUser, favorites} = this.props;
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
             <a href="http://rkoron.com"><p>Contact</p></a>
           </nav>
        </div>

        <div className="user-show-right-box">
          <div className="show-right">
              <div className="right-box-header">
                <h2>{user.username}s Profile</h2>
                {this.createButtonShow()}
                {this.showFavorites()}
              </div>
             <UserShowList items={items} currentUser={currentUser} />
          </div>
        </div>
      </div>
    </div>
   );
 }
}

// <FavoriteIndex favorites={favorites} />

export default UserShow;
