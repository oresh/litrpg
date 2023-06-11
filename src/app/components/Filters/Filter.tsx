import * as React from 'react';

const containsArray = function (arr: Array<String>, match: Array<String>) {
  if (match.length == 0) return true;
  for (var i = 0; i < match.length; i++) {
    if (arr.indexOf(match[i]) === -1) return false;
  }
  return true;
};

const Filter = ({ filter, name, selected }) => {
  console.log(filter, selected);
  var is_match = selected.indexOf(filter) !== -1;
  return (
    <li
      className="collection-filter"
      data-active={is_match}
      data-filter={filter}
    >
      {name}
    </li>
  );
};

export default Filter;
