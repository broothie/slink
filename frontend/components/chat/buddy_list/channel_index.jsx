import React from 'react';

export default class ChannelIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserChannels();
  }

  render() {
    return (
      <ul className='channel-index'>
        {
          this.props.channelInfos.map((channelInfo, idx) => (
            <li
              key={idx}
              onClick={() => this.props.addWindow(channelInfo.id)}
            >
               - {channelInfo.name}
            </li>
          ))
        }
      </ul>
    );
  }
}
