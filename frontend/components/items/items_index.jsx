import React from "react";
import ItemIndexItem from "./items_index_items";

class ItemsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchItems();
  }

  render(){
    return(
      <div className="items-index-main">
        <ul className="items-index">
          {this.props.items.map(
            item =>
            <ItemIndexItem
              key={item.id}
              item={item}
              user={this.props.users[item.userId]}
            />)};
        </ul>
      </div>
    );
  }

}


export default ItemsIndex;
