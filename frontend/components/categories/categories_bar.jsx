import React from "react";
import { button } from "react-router-dom";

class CategoriesBar extends React.Component{

  handleSearch(query){
    return () => this.props.searchItems({description: query}).then(
      this.props.history.push("/search"));
  }

  render(){
    return(
      <div className="categories-bar">
        <ul className="categories">
          <li><button
          onClick={this.handleSearch("map")}
            >Maps</button>
          </li>
          <li><button
            onClick={this.handleSearch("boat")}
            >Boats</button>
          </li>
          <li><button
            onClick={this.handleSearch("ocean")}
            >Oceans</button>
          </li>
          <li><button
            onClick={this.handleSearch("knot")}
            >Knots</button>
          </li>
          <li><button
            onClick={this.handleSearch("compass")}
            >Compasses</button>
          </li>
          <li><button
            onClick={this.handleSearch("animal")}
            >Land Animals</button>
          </li>
          <li><button
            onClick={this.handleSearch("rope")}
            >Rope</button>
          </li>
          <li><button
            onClick={this.handleSearch("bird")}
            >Birds</button>
          </li>
          <li><button
            onClick={this.handleSearch("fish")}
            >Fish</button>
          </li>
        </ul>
      </div>
    );
  }


}

export default CategoriesBar;
