import React from "react";
import { Link } from "react-router-dom";
import { makeChange } from "../../util/item_util";

class CartForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: 1,
      itemId: this.props.item.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addItemtoCart(this.state).then(
      () => this.props.history.push("/carts")
    );
  }

  updateField(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  updateQuantity(){
    return (e) => this.setState({quantity: parseInt(e.target.value)});
  }

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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <aside className="show-aside" >
            <h3 className="show-item-title">{item.title}</h3>
            <label className="show-item-price-label">
              <p className="show-item-price">{makeChange(item.price)}</p>
           </label>
           <label className="quantity">Quantity
                <br></br>
               <select onChange={this.updateQuantity()}
                 value={this.state.quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            {this.editButtonVisible()}
           <button className="cart-button">Add to Cart</button>
         </aside>
       </form>
     </div>
   );
  }
}

export default CartForm;
