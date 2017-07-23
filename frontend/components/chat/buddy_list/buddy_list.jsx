import React from 'react';
import ChannelIndexContainer from './channel_index_container';

export default ({ signOff, openWindow }) => (
  <div className='buddy-list'>
    <header className='title-bar'>Channel List</header>
    <div className='buddy-list-content'>
      <div className='button-row'>
        <button
          onClick={() => openWindow('addChannel')}
        >
          Add Channel
        </button>

        <button
          onClick={() => openWindow('createChannel')}
        >
          New Channel
        </button>
      </div>

      <hr className='hr-divider'/>

      <ChannelIndexContainer/>

      <hr className='hr-divider'/>

      <footer>
        <button onClick={signOff}>Sign Off</button>
      </footer>
    </div>
  </div>
);
