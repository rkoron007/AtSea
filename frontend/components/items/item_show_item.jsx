import React from "react";
import { Link } from 'react-router-dom';

const ItemShowItem = ({item}) => {

    return(
      <li>
        <Link to={`/items/${item.id}`}>
          <img src={item.imageUrl} className="extra-user-item-img"/>
        </Link>
      </li>
  );
};

export default ItemShowItem;
