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
      <Link to={`/items/${item.id}`}>
        <img src={item.imageUrl} className="extra-user-item-img"/>
      </Link>
    </li>);
  }

  otherUserItemPictures(items){
    if (items)
    {
      return items.slice(1).map(item => this.createList(item));
    }
  }

  render(){
   const { item, user, items } = this.props;
   if (!item || !user ) {
     return <div>Nope...</div>;
     }
   return(
     <div className="items-show">
       <div className="show-header">
         <div className="show-left">
           <Link to={`users/${user.id}`}>
             <img src={user.imgUrl} className="user-item-img"/></Link>
           <h1>{user.username}</h1>
         </div>
         <div className="show-right">
            <ul>
              {this.otherUserItemPictures(items)}
              <Link to={`users/${user.id}`}
                className="keep-shopping">See More</Link>
           </ul>
         </div>
       </div>

      <div className="show-middle-box">
        <div className="show-middle">

          <img src={item.imageUrl} className="show-item-img"/>
          <aside className="show-aside" >
            <h3 className="show-item-title">{item.title}</h3>
            <label className="show-item-price-label">Item Price:
              <p className="show-item-price">${item.price}</p>
           </label>
           <label className="quantity">Quantity
               <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
           <button className="cart-button">Add to Cart</button>
         </aside>
       </div>

       <div className="show-item-description">
         <h1>Details:</h1>
         <p>{item.description}</p>
       </div>
      </div>
     </div>
   );
 }
}


export default ItemShow;
