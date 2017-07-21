import React from 'react';
import ChannelIndexContainer from './channel_index_container';

export default ({ signOff }) => (
  <div className='buddy-list'>
    <header className='title-bar'>Buddy List</header>
    <div className='buddy-list-content'>
      <label>Channels</label>

      <ChannelIndexContainer/>

      <hr className='hr-divider'/>

      <footer>
        <button onClick={signOff}>Sign Off</button>
      </footer>
    </div>
  </div>
);
