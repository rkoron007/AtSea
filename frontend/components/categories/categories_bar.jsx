import React from "react";
import { NavLink } from "react-router-dom";

class CategoriesBar extends React.Component{

  render(){
    return(
      <div className="categories-bar">
        <ul className="categories">
          <li><NavLink to="/item"
            activeClassName="categories-selected"
            />Maps
          </li>
          <li><NavLink to="/item"
            activeClassName="categories-selected"
            />Boats
          </li>
          <li><NavLink to="/item"
            activeClassName="categories-selected"
            />Oceans
          </li>
          <li><NavLink to="/item"
            activeClassName="categories-selected"
            />Knots
          </li>
          <li><NavLink to="/item"
            activeClassName="categories-selected"
            />Compasses
          </li>
          <li><NavLink to="/item"
            activeClassName="categories-selected"
            />Animals
          </li>
        </ul>
      </div>
    );
  }


}

export default CategoriesBar;
