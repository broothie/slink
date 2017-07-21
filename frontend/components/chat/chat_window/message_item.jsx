import React from 'react';

export default ({ currentUser, message: { authorScreenname, body}}) => {
  const klass = currentUser.screenname === authorScreenname ? (
    'ownUser-message'
  ) : (
    'foreignUser-message'
  );

  return (
    <li>
      <span className={klass}>
        {authorScreenname}
      </span>: {body}
    </li>
  );
};
