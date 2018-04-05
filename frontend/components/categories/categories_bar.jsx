import React from "react";

class CategoriesBar extends React.Component{

  render(){
    return(
      <div className="categories-bar">
        <ul className="categories">
          <li>Maps</li>
          <li>Boats</li>
          <li>Oceans</li>
          <li>Knots</li>
          <li>Compasses</li>
          <li>Animals</li>
        </ul>
      </div>
    );
  }


}

export default CategoriesBar;
