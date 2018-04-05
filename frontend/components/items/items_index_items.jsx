import React from "react";
import { Link } from 'react-router-dom';

const ItemIndexItem = ({ item }) => {

  return <li className="item">
    <Link
      to={`/items/${item.id}`}><img src={item.imageUrl}/>
    </Link>
    <Link
      to={`/items/${item.id}`}
      className= 'item-index-title'>{item.title}
    </Link>
    <Link
      to={`/items/${item.id}`}
      className= 'item-index-price'>${item.price}
    </Link>
  </li>;
};

export default ItemIndexItem;
