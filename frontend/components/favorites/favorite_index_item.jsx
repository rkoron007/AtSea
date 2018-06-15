import React from "react";
import { Link } from "react-router-dom";
import { makeChange } from "../../util/item_util";

export default class FavoriteIndex extends React.Component {
    render() {
        if (!this.props.favorite){
            return null;
        }

        const item = this.props.favorite;

        return (
            <li className="favorite-item">
                <Link to={`/items/${item.id}/`}>
                    <img src={item.imageUrl} className="show-item-img" />
                </Link>
                <div className="item-info">
                    <h5>{item.title}</h5>
                    <p>{makeChange(item.price)}</p>
                </div>
            </li>

        );
    }
}

