import React from 'react';


const FilterForm = (props) => (
  <div className="index-filter">
    <h3>Filters</h3>
    <label>Minimum Price</label>
    <input
      type="number"
      value="number"
    />
    <label>Maximum Price</label>
    <input
      type="number"
      className="line-under"
      value="number"
    />
  <strike></strike>
  </div>
);

export default FilterForm;
