import * as React from 'react';
import { SortStyles } from './SortStyles';

const Sort = ({ sorting, onSortClick }) => {
  return (
    <div className="collection-sort-wrapper">
      <h3>Sorting</h3>
      <ul className="collection-sorting">
        {sorting.map((sort, index) => (
          <li
            key={index}
            className="collection-sort"
            data-active={sort.selected}
            data-sort={sort.slug}
            onClick={onSortClick.bind(null, sort)}
          >
            {sort.name}
          </li>
        ))}
      </ul>
      <SortStyles />
    </div>
  );
};

export default Sort;
