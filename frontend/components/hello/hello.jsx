import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default props => (
  props.signedOn ? (
    <Redirect to='/chat'/>
  ) : (
    <div>
      Welcome to Slink Instant Messaging
      <Link to='/signup'>Sign Up</Link>
      <Link to='/signon'>Sign On</Link>
    </div>
  )
);
