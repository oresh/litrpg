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
  .tier-class-s {
      background-color: #c6220b;
      color: #fff;
  }
  .tier-class-a {
      background-color: #df8b00;
  }
  .tier-class-b {
      background-color: #fedf0e;
  }
  .tier-class-c {
      background-color: #90e400;
  }
  .tier-class-d {
      background-color: #0cf198;
  }
  .tier-class-description {
      width: calc(var(--tier-width)*1.3);
      min-width: calc(var(--tier-width)*1.3);
      padding: 0 10px;
      font-size: 20px;
  }
  .tier-books {
      display: flex;
      flex-wrap: wrap;
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
      padding: 10px;
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
      border: 1px solid #382110;
      color: #382110;
      text-decoration: none;
      height: 25px;
      line-height: 25px;
      text-align: center;
  }
  .book-link:hover,
  .book-link:active {
      background-color: #382110;
      color: #fff;
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
