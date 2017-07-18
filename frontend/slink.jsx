import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Remove testing imports
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  // TODO: Remove testing objects on window
  window.APIUtil = APIUtil;

  ReactDOM.render(
    <h1>slink coming even sooner...</h1>,
    document.getElementById('root')
  );
});
