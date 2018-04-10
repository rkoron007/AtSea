import React from "react";
import { Link } from 'react-router-dom';
import { makeChange } from "../../util/item_util";

const ItemIndexItem = ({ item, user }) => {
  return <li className="item">
    <Link
      to={`/items/${item.id}`}><img src={item.imageUrl}/>
    </Link>
    <Link
      to={`/items/${item.id}`}
      className= 'item-index-title'>{item.title}
    </Link>
    <Link
      to={`/users/${user.id}`}
      className= 'item-index-user'>{user.username}
    </Link>
    <Link
      to={`/items/${item.id}`}
      className= 'item-index-price'>{makeChange(item.price)}
    </Link>
  </li>;
};

export default ItemIndexItem;
