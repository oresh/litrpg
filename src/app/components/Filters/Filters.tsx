import * as React from 'react';
import { FilterStyles } from './FilterStyles';

const Filters = ({filters, onFilterClick}) => {
  return (
    <div className="filters-wrapper">
      <h3>Filters</h3>
      <ul className="collection-filters">
         {filters.map((filter, index) => (
          <li
            key={index}
            className="collection-filter"
            data-active={filter.selected}
            data-filter={filter.slug}
            onClick={onFilterClick.bind(null, filter)}
            >
              {filter.name}
          </li>
        ))}
      </ul>
      <FilterStyles />
    </div>
  );
};

export default Filters;