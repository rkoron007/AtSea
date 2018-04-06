import React from "react";
import {Link} from "react-router-dom";
class ItemShow extends React.Component{

  componentDidMount(){
    return this.props.fetchItem(this.props.match.params.itemId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.itemId !== nextProps.match.params.itemId) {
      this.props.fetchItem(nextProps.match.params.itemId);
    }
  }


  createList(item){
    return(
    <li>
      <Link to={`items/${item.id}`}>
        <img src={item.imgUrl} className="extra-user-item-img"/>
      </Link>
    </li>);
  }

  otherUserItemPictures(items){
    if (items)
    {
      return items.forEach(item => this.createList(item));
    }
  }

  render(){
   const { item, user, items } = this.props;
   if (!item || !user ) {
     return <div>Loading...</div>;
     }
   return(
     <div className="items-show">
       <div className="show-header">
         <div className="show-left">
           <img src={user.imgUrl} className="user-item-img"/>
           <h1>{user.username}</h1>
         </div>
         <div className="show-right">
            <ul>
              <li><img src={user.imgUrl} className="extra-user-item-img"/></li>
              <li><img src={user.imgUrl} className="extra-user-item-img"/></li>
              <li><img src={user.imgUrl} className="extra-user-item-img"/></li>
              <Link to="/"className="keep-shopping">Keep Shopping</Link>
           </ul>
         </div>
       </div>

       <div className="show-middle">
         <img src={item.imageUrl} className="show-item-img"/>
         <aside className="show-aside" >
           <h3 className="show-item-title">{item.title}</h3>
           <p className="show-item-price">{item.price}</p>
           <button className="cart-button">Add to Cart</button>
         </aside>
       </div>
       <div className="show-item-description">
         <h1>Details:</h1>
         <p>{item.description}</p>
       </div>

     </div>
   );
 }
}


export default ItemShow;
