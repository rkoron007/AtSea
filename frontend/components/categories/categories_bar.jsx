import React from "react";
import { NavLink } from "react-router-dom";

class CategoriesBar extends React.Component{

  render(){
    return(
      <div className="categories-bar">
        <ul className="categories">
          <li><NavLink to="/items"
            activeClassName="categories-selected"
            >Maps</NavLink>
          </li>
          <li><NavLink to="/items"
            activeClassName="categories-selected"
            >Boats</NavLink>
          </li>
          <li><NavLink to="/items"
            activeClassName="categories-selected"
            >Oceans</NavLink>
          </li>
          <li><NavLink to="/items"
            activeClassName="categories-selected"
            >Knots</NavLink>
          </li>
          <li><NavLink to="/items"
            activeClassName="categories-selected"
            >Compasses</NavLink>
          </li>
          <li><NavLink to="/items"
            activeClassName="categories-selected"
            >Animals</NavLink>
          </li>
        </ul>
      </div>
    );
  }


}

export default CategoriesBar;
