import React from 'react';

export default class ChannelIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserChannels();
  }

  render() {
    return (
      <div className='channel-index'>

        <div>
        <label>Channels</label>
          <ul>
            {
              this.props.channelInfos.map(channelInfo => (
                <li
                  key={channelInfo.id}
                  onClick={() => this.props.addWindow(channelInfo.id)}
                >
                   - <span>{channelInfo.name}</span>
                </li>
              ))
            }
          </ul>
        </div>

        <div>
          <label>Direct Messages</label>
          <ul>
            {
              this.props.dmInfos.map(dmInfo => (
                <li
                  key={dmInfo.id}
                  onClick={() => this.props.addWindow(dmInfo.id)}
                >
                   - <span>{dmInfo.name}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
