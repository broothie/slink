import React from 'react';
import ChannelIndexContainer from './channel_index_container';

export default ({ signOff }) => (
  <div className='buddy-list'>
    <button onClick={signOff}>Sign Off</button>
    <ChannelIndexContainer/>
  </div>
);
