import React from 'react';

export default class ChannelIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserChannels();
  }

  setHandleRemoveClick(channelId) {
    return e => {
      e.preventDefault();
      this.props.removeChatWindow(channelId);
      this.props.destroyChannel(channelId);
    };
  }

  render() {
    return (
      <div className='channel-index'>
        <div>
          <h1>Chats</h1>
          <span>
            <a onClick={() => this.props.openWindow('createPrivateChat')}>
              New
            </a>
          </span>
        </div>
        <ul>
          {
            this.props.dmInfos.map(dmInfo => (
              <li
                key={dmInfo.id}
                onDoubleClick={() => this.props.addWindow(dmInfo.id)}
              >
                <span>{dmInfo.name}</span>
                <a
                  onClick={this.setHandleRemoveClick(dmInfo.id)}
                >
                  Remove
                </a>
              </li>
            ))
          }
        </ul>

        <div>
          <h1>Channels</h1>
          <span>
            <a onClick={() => this.props.openWindow('addChannel')}>
              Find
            </a>
            <a onClick={() => this.props.openWindow('createChannel')}>
              Create
            </a>
          </span>
        </div>
        <ul>
          {
            this.props.channelInfos.map(channelInfo => (
              <li
                key={channelInfo.id}
                onDoubleClick={() => this.props.addWindow(channelInfo.id)}
              >
                <span>{channelInfo.name}</span>
                <a
                  onClick={this.setHandleRemoveClick(channelInfo.id)}
                >
                  Remove
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
