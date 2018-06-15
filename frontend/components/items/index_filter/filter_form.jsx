import React from 'react';


const FilterForm = (props) => (
  <div className="index-filter">
    <h3 className="filter-header">Sort By:</h3>
    <div className="filter-btns">
      <button onClick={ () => props.receiveSearchType("asc")}>Ascending
      </button>
      <button onClick={ () => props.receiveSearchType("desc")}>Descending
      </button>
    </div>
  <strike></strike>
  </div>
);

export default FilterForm;
