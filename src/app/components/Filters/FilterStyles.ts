import { createGlobalStyle } from 'styled-components';

export const FilterStyles = createGlobalStyle`
  .collection-wrapper {
    font-family: "Lato", sans-serif;
    padding: 0 15px;
  }
  .collection-wrapper h3 {
    color: #090580;
    margin-bottom: 7px;
  }
  .collection-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 10px 0;
  }
  .collection-filter {
    list-style: none;
    padding: 5px 15px;
    background: #F4D3D3;
    border-radius: 15px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
  }
  .collection-filter:hover {
    box-shadow: 0 0 0 2px #E8A9A9;
  }
  .collection-filter-clear {
    background: #f0f0f0;
  }
  .collection-filter-clear:hover {
    box-shadow: 0 0 0 2px #ddd;
  }
  .collection-filter[data-active="true"] {
    background: #E8A9A9;
    color: #000;
  }
`;
