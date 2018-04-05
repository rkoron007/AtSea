import React from "react";
import { Link } from 'react-router-dom';

const ItemIndexItem = ({ item }) => {
  
  return <li className="item">
    <Link to={`/items/${item.id}`}><img src={item.imageUrl}/></Link>
    <Link to={`/items/${item.id}`}>{item.title}</Link>
    <Link to={`/items/${item.id}`}>${item.price}</Link>
  </li>;
};

export default ItemIndexItem;
