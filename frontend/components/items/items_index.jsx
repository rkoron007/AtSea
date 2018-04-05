import React from "react";
import ItemIndexItem from "./items_index_items";
import FilterForm from './index_filter/filter_form';
import { Route } from 'react-router-dom';

class ItemsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchItems();
  }

  render(){
    return(
      <div className="filter-and-index">
        <Route exact path="/items" component={FilterForm } />
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
      </div>
    );
  }

}


export default ItemsIndex;
