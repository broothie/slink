import React from 'react';

export default props => (
  <ul className='utility-windows'>
    {
      props.utilityWindows.map(Component => (
        <li key={Component.displayName}>
          <Component/>
        </li>
      ))
    }
  </ul>
);
