import { createGlobalStyle } from 'styled-components';

export const SortStyles = createGlobalStyle`
  .collection-sort-wrapper {
    font-family: "Lato", sans-serif;
    padding: 0 15px 0 0 ;
    width: 50%;
    float: left;
  }
  .collection-sort-wrapper h3 {
    margin-bottom: 7px;
    margin-top: 10px;
  }
  .collection-sorting {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .collection-sort {
    list-style: none;
    padding: 5px 15px;
    background: #fff;
    border: 1px #46458C solid;
    border-radius: 15px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    color: #46458C;
  }
  .collection-sort[data-active="true"] {
    background: #46458C;
    color: #fff;
  }
`;
