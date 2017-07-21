import React from 'react';

export default class ChannelIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserChannels();
  }

  render() {
    return (
      <ul>
        {
          this.props.channelInfos.map((channelInfo, idx) => (
            <button
              key={idx}
              onClick={() => this.props.addWindow(channelInfo.id)}
            >
              {channelInfo.name}
            </button>
          ))
        }
      </ul>
    );
  }
}
