import React from 'react';

export default props => (
  <ul className='utility-windows'>
    {
      props.utilityWindows.map((Component, idx) => (
        <li key={idx}>
          <Component/>
        </li>
      ))
    }
  </ul>
);
