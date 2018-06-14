import React from "react";

export default class FavoriteIndex extends React.Component {
    render() {
        if (!this.props.favorite){
            return null;
        }
        const favorite = this.props.favorite;
        return (
            <li>
                <p>{favorite.title}</p>
                <img className="favorite-image" src={favorite.imageUrl}/>
            </li>
        );
    }
}

