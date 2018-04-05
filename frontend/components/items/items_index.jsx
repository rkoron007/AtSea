import React from "react";
import ItemIndexItem from "./items_index_items";

class ItemsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchItems();
  }

  render(){
    return(
      <div>
        <h1 className="staff-headline">Staff Favorites</h1>
        <ul className="items-index">
          {this.props.items.map(
            item =>
            <ItemIndexItem
              key={item.id}
              item={item}
            />)};
        </ul>
      </div>
    );
  }

}


export default ItemsIndex;
