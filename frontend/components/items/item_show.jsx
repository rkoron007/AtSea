import React from "react";
import {Link} from "react-router-dom";
import ItemShowItem from "./item_show_item";
import FavoriteForm from "../favorites/favorite_form_container";
import ReviewIndexContainer from "../reviews/review_index_container";
import CartFormContainer from "../cart/cart_form_container";
import ReviewFormContainer from "../reviews/review_form_container";

class ItemShow extends React.Component{

  componentDidMount(){
    return this.props.fetchItem(this.props.match.params.itemId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.itemId !== nextProps.match.params.itemId) {
      this.props.fetchItem(nextProps.match.params.itemId);
    }
  }

  otherUserItemPictures(items){
    if (items)
    {
      return items.slice(1).map(item => <ItemShowItem key={item.id} item={item} />);
    }
  }


  render(){
   const { item, user, items } = this.props;
   if (!item || !user ) {
     return  <div>No Items to be Found!</div>;
     }

   return(
     <div className="items-show">
       <div className="show-header">
         <div className="show-left">
             <Link to={`/users/${user.id}`}>
               <img src={user.imgUrl} className="user-item-img"/>
             </Link>
           <div className="username">
             <Link to={`/users/${user.id}`}>
               <h1>{user.username}</h1>
             </Link>

            </div>
         </div>
         <div className="show-right">
            <ul>
              {this.otherUserItemPictures(items)}
              <div className="outside-border">
                <div className="border">
                  <Link to={`/users/${user.id}`}
                    className="keep-shopping">See More Items</Link>
                </div>
              </div>
           </ul>
         </div>
       </div>

      <div className="show-middle-box">
        <div className="show-middle">
          <img src={item.imageUrl} className="show-item-img"/>
           <FavoriteForm itemId={item.id} liked={item.currentUserLikes}/>
          <CartFormContainer item={item}/>
       </div>

       <div className="show-item-description">
         <h1>Details:</h1>
         <p>{item.description}</p>
       </div>

       <ReviewFormContainer itemId={item.id}/>
       <ReviewIndexContainer itemId={item.id}/>
      </div>
     </div>
   );
 }
}


export default ItemShow;
