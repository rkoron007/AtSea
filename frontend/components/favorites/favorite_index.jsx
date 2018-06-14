import React from "react";
import FavoriteIndexItem from "./favorite_index_item";

export default class FavoriteIndex extends React.Component {

    render(){
        if (!this.props.favorites){
            return (
                <p>You Currently Have No Favorites.</p>
            );
        }
        return (
        <div className="favorite-index">
            <ul className="favorite-list">
            {this.props.favorites.map((favorite, idx) => 
                    <FavoriteIndexItem
                    favorite={favorite}
                    key={idx}/>
            )}
            </ul>
        </div>
        );
    }
}

