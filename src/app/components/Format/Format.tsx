import * as React from 'react';
import { FormatStyles } from './FormatStyles';

const Format = ({ formats, onFormatClick }) => {
  return (
    <div className="collection-sort-wrapper">
      <h3>Format</h3>
      <ul className="collection-sorting">
        {formats.map((format, index) => (
          <li
            key={index}
            className="collection-sort"
            data-active={format.selected}
            data-format={format.slug}
            onClick={onFormatClick.bind(null, format)}
          >
            {format.name}
          </li>
        ))}
      </ul>
      <FormatStyles />
    </div>
  );
};

export default Format;
