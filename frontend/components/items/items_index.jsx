import React from "react";
import ItemIndexItem from "./items_index_items";
import FilterForm from './index_filter/filter_form';
import { Route } from 'react-router-dom';

class ItemsIndex extends React.Component{

  componentDidMount(){
    if (this.props.match.path !== "/search"){
    this.props.fetchItems();
    }
  }

  componentWillReceiveProps(nextProps){
    if ((nextProps.match.path !== "/search")
    && (nextProps.match.path !== this.props.match.path)){
    this.props.fetchItems();
    }
  }

  render(){
    if (this.props.items.length === 0) {
      return null;
    }

    return(
      <div className="filter-and-index">
        <Route exact path="/items" component={FilterForm } />
        <Route exact path="/search" component={FilterForm } />
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
