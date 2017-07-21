import React from 'react';

export default ({ message: { id, authorScreenname, body}}) => (
  <li>
    {authorScreenname}: {body}
  </li>
);
