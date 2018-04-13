import React from 'react';


const FilterForm = (props) => (
  <div className="index-filter">
    <h3 className="filter-header">Filters</h3>
    <div className="filter-btns">
      <button onClick={ () => props.receiveSearchType("asc")}>Sort by Ascending
      </button>
      <button onClick={ () => props.receiveSearchType("desc")}>Sort by Descending
      </button>
    </div>
  <strike></strike>
  </div>
);

export default FilterForm;
