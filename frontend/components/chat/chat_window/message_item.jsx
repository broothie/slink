import React from 'react';

export default ({ currentUser, message: { authorScreenname, body }, createPrivateChannel }) => {
  const klass = currentUser.screenname === authorScreenname ? (
    'ownUser-message'
  ) : (
    'foreignUser-message'
  );

  return (
    <li>
      <span
        className={klass}
        onClick={() => createPrivateChannel([
          currentUser.screenname,
          authorScreenname
        ])}
      >
        {authorScreenname}
      </span>: {body}
    </li>
  );
};
