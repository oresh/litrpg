import { createGlobalStyle } from 'styled-components';

export const BooksStyles = createGlobalStyle`
  :root {
      --book-width: 140px;
      --book-height: calc(var(--book-width)*1.5);
      --tier-width: 100px;
      --class-s-color: #f0f0f0;
      --class-a-color: #f0f0f0;
      --class-b-color: #f0f0f0;
      --class-c-color: #f0f0f0;
      --class-d-color: #f0f0f0;
      --class-e-color: #f0f0f0;
  }
  .book img {
      width: var(--book-width);
      height: var(--book-height);
      object-fit: cover;
      border-radius: 6px;
  }
  .books-wrapper {
      margin-top: 30px;
      padding-bottom: 30px;
  }
  .tier {
      display: flex;
      gap: 0 15px;
      margin-bottom: 10px;
      width: 100%;
  }
  .tier-class {
      width: var(--tier-width);
      min-width: var(--tier-width);
      background: #f0f0f0;
      justify-content: center;
      text-align: center;
      display: flex;
      align-items:center;
      justify-content:center;
      font-size: 35px;
      font-weight: 700;
  }
  .tier-class-description {
      width: calc(var(--tier-width)*1.3);
      min-width: calc(var(--tier-width)*1.3);
      padding: 0 10px;
      font-size: 20px;
  }
  .tier-books {
      clear: both;
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
  }
  .book {
      position: relative;
  }
  .book[data-visible="false"] {
      opacity: 0.25;
  }
  .book-hint {
      display: none;
      width: var(--book-width);
      height: var(--book-height);
      border-radius: 6px;
      box-sizing: border-box;
      position: absolute;
      padding: 12px 10px 10px 10px;
      background: #f0f0f0;
      top: 0;
      left: 0;
      color: #333;
      font-size: 12px;
  }
  .book:hover .book-hint {
      display: flex;
      flex-direction: column;
  }
  .book-name {
      font-family: "Merriweather", serif;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 0;
      margin-top: 0;
  }
  .book-series {
      margin-bottom: 5px;
      margin-top: 0;
      padding-right: 28px;
  }
  .book-author {
      margin-top: 2px;
      flex-grow: 10;
  }
  .book-author:before {
      content: 'by ';
  }
  .book-link {
      display: block;
      align-self: flex-end;
      width: 100%;
      border: 1px solid #090580;
      color: #090580;
      text-decoration: none;
      height: 25px;
      line-height: 25px;
      text-align: center;
  }
  .book-link:hover,
  .book-link:active {
      background-color: #46458C;
      color: #fff;
  }
  .book-favorite {
      display: block;
      width: 30px;
      height: 30px;
      position: absolute;
      top: 5px;
      right: 5px;
      border-radius: 30px;
      background: rgba(0,0,0,0.25);
      z-index: 10;
      cursor: pointer;
  }
  .book-favorite:after {
      content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgd2lkdGg9IjIycHgiIGhlaWdodD0iMjJweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgIDxwYXRoIGQ9Ik00LjMzMTQgMTIuMDQ3NEwxMiAyMEwxOS42Njg2IDEyLjA0NzRDMjAuNTIxMSAxMS4xNjMzIDIxIDkuOTY0MjkgMjEgOC43MTQwNUMyMSA2LjExMDU1IDE4Ljk2NDggNCAxNi40NTQzIDRDMTUuMjQ4NyA0IDE0LjA5MjUgNC40OTY2NiAxMy4yNCA1LjM4MDcxTDEyIDYuNjY2NjdMMTAuNzYgNS4zODA3MUM5LjkwNzQ5IDQuNDk2NjYgOC43NTEyOCA0IDcuNTQ1NjkgNEM1LjAzNTE3IDQgMyA2LjExMDU1IDMgOC43MTQwNUMzIDkuOTY0MjkgMy40Nzg5MiAxMS4xNjMzIDQuMzMxNCAxMi4wNDc0WiIgc3Ryb2tlPSIjRjREM0QzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+);
      width: 15px;
      height: 15px;
      position: relative;
      top: 5px;
      left: 4px;
  }
  .book-favorite.is-favorite:after {
      content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuOTcwNDUgOS4wNDM0NUwxMCAxNi4zMzMzTDE3LjAyOTYgOS4wNDM0NUMxNy44MTEgOC4yMzMwMiAxOC4yNSA3LjEzMzkzIDE4LjI1IDUuOTg3ODhDMTguMjUgMy42MDEzNCAxNi4zODQ0IDEuNjY2NjYgMTQuMDgzMSAxLjY2NjY2QzEyLjk3OCAxLjY2NjY2IDExLjkxODEgMi4xMjE5NCAxMS4xMzY3IDIuOTMyMzJMMTAgNC4xMTExMUw4Ljg2MzMzIDIuOTMyMzJDOC4wODE4NyAyLjEyMTk0IDcuMDIyMDEgMS42NjY2NiA1LjkxNjg4IDEuNjY2NjZDMy42MTU1NyAxLjY2NjY2IDEuNzUgMy42MDEzNCAxLjc1IDUuOTg3ODhDMS43NSA3LjEzMzkzIDIuMTg5MDEgOC4yMzMwMiAyLjk3MDQ1IDkuMDQzNDVaIiBmaWxsPSIjRThBOUE5IiBzdHJva2U9IiNFOEE5QTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
      top: 7px;
      left: 5px;
      color: #E8A9A9;
  }

  .book:hover .book-favorite {
    background: none;
  }


  @media screen and (max-width: 700px) {
      body .tier {
        display: block;
      }
      body .tier-class {
        width: auto;
        padding: 20px;
        margin: 15px 0 10px 0;
      }
      
  }
`;
