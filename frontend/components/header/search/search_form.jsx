import React from "react";

class SearchForm extends React.Component{

  render(){
      return(
        <div className="search">
          <div>
            <input type="text" className="search-input">
            </input>
          </div>
          <div>
            <button className="search-button">Search</button>
          </div>
          <div className="clearfix"></div>
      </div>
    );
  }

}

export default SearchForm;
