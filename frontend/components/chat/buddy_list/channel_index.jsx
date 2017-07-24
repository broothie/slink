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
        </div>

        <div>
          <label>Direct Messages</label>
          <ul>
            {
              this.props.dmInfos.map((dmInfo, idx) => (
                <li
                  key={idx}
                  onClick={() => this.props.addWindow(dmInfo.id)}
                >
                   - {dmInfo.name}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
