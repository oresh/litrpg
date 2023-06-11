import { createGlobalStyle } from 'styled-components';

export const FilterStyles = createGlobalStyle`
  .collection-wrapper {
    font-family: "Lato", sans-serif;
    padding: 0 15px;
  }
  .collection-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    list-style: none;
    padding: 0;
  }
  .collection-filter {
    list-style: none;
    padding: 5px 15px;
    background: #e0e0e0;
    border-radius: 15px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
  }
  .collection-filter[data-active="true"] {
    background: #000;
    color: #fff;
  }
`;
