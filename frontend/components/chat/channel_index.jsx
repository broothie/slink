import React from 'react';

export default ({ channelInfos }) => (
  <ul>
    {
      channelInfos.map((channelInfo, idx) => (
        <li key={idx}>{channelInfo.name}</li>
      ))
    }
  </ul>
);
