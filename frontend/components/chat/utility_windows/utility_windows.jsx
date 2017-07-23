import React from 'react';

export default props => (
  <ul>
    {
      props.utilityWindows.map((Component, idx) => (
        <li key={idx}>
          <Component/>
        </li>
      ))
    }
  </ul>
);
