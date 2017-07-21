import React from 'react';

export default props => (
  <ul>
    {
      props.channelInfos.map((channelInfo, idx) => (
        <button
          key={idx}
          onClick={() => props.addWindow(channelInfo.id)}
        >
          {channelInfo.name}
        </button>
      ))
    }
  </ul>
);
