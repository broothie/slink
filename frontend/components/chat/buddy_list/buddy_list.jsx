import React from 'react';
import ChannelIndexContainer from './channel_index_container';

export default class BuddyList extends React.Component {
  constructor(props) {
    super(props);

    this.signOffSound = new Audio('/audio/doorslam.wav');

    this.newPrivateMessageSound = new Audio('/audio/ring.wav');

    this.bringToFront = this.bringToFront.bind(this);
    this.handleSignOff = this.handleSignOff.bind(this);
  }

  componentWillMount() {
    const currentUser = this.props.currentUser;

    this.connection = this.props.cable.subscriptions.create('AppearanceChannel',
      {
        received: channelId => {
          if (!this.props.chatWindows.includes(channelId)) {
            return this.props.requestChannel(channelId).then(
              ({ channel }) => {
                this.props.addChatWindow(channel.id);
                this.newPrivateMessageSound.play();
              }
            );
          }
        }
      }
    );
  }

  componentDidMount() {
    $(this.pane).draggable({
      handle: 'header',
      containment: 'body'
    });
    this.pane.style.right = '50px';
    this.pane.style.top = '50px';
  }

  componentWillUnmount() {
    this.props.cable.subscriptions.remove(this.connection);
  }

  bringToFront(e) {
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();
  }

  handleSignOff(e) {
    this.props.signOff().then(
      () => this.signOffSound.play()
    ).then(
      this.props.clearWindows()
    );
  }

  render() {
    const { openWindow, currentUser: { screenname } } = this.props;

    return (
      <div
        className='buddy-list'
        ref={pane => { this.pane = pane; }}
        onMouseDown={this.bringToFront}
      >
        <header className='title-bar title-bar-with-exit'>
          Channel List

          <button
            onClick={this.handleSignOff}
          >
            <img src='https://res.cloudinary.com/dfawecall/image/upload/t_media_lib_thumb/v1501006578/x-symbol_idzbho.png'/>
          </button>
        </header>

        <div className='buddy-list-content'>
          <div className='user-row'>
            <p>Welcome, {screenname}!</p>
            <a
              onClick={this.handleSignOff}
            >
              Sign Off
            </a>
          </div>

          <hr className='hr-divider'/>

          <div className='square-title-logo-small'>
            <img src='https://res.cloudinary.com/dfawecall/image/upload/v1500956186/Logomakr_5NM6R1_ibdrdc.png'/>
            <h2>Slink<br/> <em>Instant<br/> Messenger</em></h2>
          </div>

          <hr className='hr-divider'/>

          <ChannelIndexContainer openWindow={openWindow}/>
        </div>
      </div>
    );
  }
}
