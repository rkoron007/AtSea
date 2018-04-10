import React from "react";
import { Link } from 'react-router-dom';
import { makeChange } from "../../util/item_util";

class CartIndexItem extends React.Component{
  findTotalItemPrice(){
    let sum = 0;
       sum += (this.props.item.price * this.props.item.quantity);
    return sum;
  }

  render(){
    const { item, removeItemfromCart} = this.props;
      return(
      <li>
        <img src={item.imageUrl} className="cart-item-image"/>

        <div className="cart-item-info">
          <p className="cart-item-price">{makeChange(item.price)}</p>
          <h1 className="cart-item-title">{item.title}</h1>
          <p className="cart-item-quantity">Quantity:  {item.quantity}</p>
          <Link to={`users/${item.userId}`} className="keep-shopping">
            See More By This User
          </Link>
           <button
             onClick={() => removeItemfromCart(item.id)}
             className="remove-button">
             Remove
           </button>
        </div>

         <div className="checkout">
          <p className="total-price-items">
            <span>Item(s) total:</span>
            <span>{makeChange(this.findTotalItemPrice())}</span>
          </p>
          <p className="total-price">
            <span>Total  {item.quantity}  item(s):</span>
              <span>{makeChange(this.findTotalItemPrice())}</span>
          </p>
          <button
             onClick={() => removeItemfromCart(item.id)}
             className="checkout-button">Checkout
          </button>
        </div>
      </li>
    );
  }
}

export default CartIndexItem;
