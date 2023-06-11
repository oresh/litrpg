import { compose } from '@reduxjs/toolkit';
import * as React from 'react';
import { connect } from 'react-redux';
import { injectReducer } from 'redux-injectors';
import Filter from './Filter';
import { FiltersList } from './FiltersList';
import { FilterStyles } from './FilterStyles';

const Filters = () => {
  const selectedFilters = ['litrpg', 'noncombat'];
  const filternames = Object.keys(FiltersList);
  return (
    <div className="filters-wrapper">
      <h3>Filters</h3>
      <ul className="collection-filters">
        {filternames.map((filter, index) => (
          <Filter
            selected={selectedFilters}
            filter={filter}
            name={FiltersList[filter]}
          />
        ))}
      </ul>
      <FilterStyles />
    </div>
  );
};

export default Filters;

// // // our select function from the previous example
// const select = state => {
//   return {
//     selectedFilters: state.selectedFilters,
//   };
// };

// // // instead of doing this in two steps, we can pass our
// // // component to the function returned by `connect` without
// // // needing to assign it to a variable first.
// export default connect(select)(Filters);
