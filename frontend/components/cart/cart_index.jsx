import React from "react";
import CartIndexItem from "./cart_index_item";
import { Link } from "react-router-dom";
class CartIndex extends React.Component{
  componentDidMount(){
    this.props.fetchCart();
  }

  findTotalPrice(){
    let sum = 0;
    this.props.cartItems.forEach((item) => {
      if (item) {
       sum += (item.price * item.quantity);
      }
    });
    return sum;
  }

  countCartItems(){
    let sum = 0;
    this.props.cartItems.forEach((item) => {
      if (item) {
       sum += item.quantity;
      }
    });

    if (sum > 1){
      return <h1
        className="cart-item-count"
        >{sum} items in your cart</h1>;
    }else{
      return <h1
        className="cart-item-count">
        {sum} item in your cart</h1>;
    }
  }


  emptyCart(){
    return(
    <div className="empty-cart">
        <h1 className="cart-item-count">
          Your Cart is currently empty. Go get yourself some items!
        </h1>
    </div>);
  }

  render(){
    const { currentUser, cartItems, removeItemfromCart} = this.props;
    if (!cartItems || cartItems.length < 1) {
      return (
        this.emptyCart()
      );
    }
      return(
      <div className="cart-background">
        <div className="cart">
          <div className="cart-header">
          {this.countCartItems()}
          <Link to="/items"
            className="keep-shopping">Keep Shopping</Link>
          </div>
          <div className="cart-middle">
            <ul className="cart-items-list">
              {cartItems.map((cartItem,idx) => <CartIndexItem
                item={cartItem}
                key={idx}
                removeItemfromCart={removeItemfromCart}
              />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default CartIndex;
