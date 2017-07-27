import React from 'react';
import ChannelIndexContainer from './channel_index_container';

export default class BuddyList extends React.Component {
  constructor(props) {
    super(props);

    this.signOffSound = new Audio(
      'http://gauss.ececs.uc.edu/Courses/c653/lectures/AIM/sound/doorslam.wav'
    );

    this.newPrivateMessageSound = new Audio(
      'http://gauss.ececs.uc.edu/Courses/c653/lectures/AIM/sound/ring.wav'
    );

    this.bringToFront = this.bringToFront.bind(this);
    this.handleSignOff = this.handleSignOff.bind(this);
  }

  componentWillMount() {
    const currentUser = this.props.currentUser;

    this.connection = this.props.cable.subscriptions.create('AppearanceChannel',
      {
        connected: () => (
          console.log(`Connected to appearances, id: ${currentUser.id}`)
        ),

        received: channelId => {
          console.log(`Received channel update from ${channelId}`);
          if (!this.props.chatWindows.includes(channelId)) {
            return this.props.requestChannel(channelId).then(
              ({ channel }) => {
                this.props.addChatWindow(channel.id);
                this.newPrivateMessageSound.play();
              }
            );
          }
        },

        disconnected: () => (
          console.log(`disconnected from appearances, id: ${currentUser.id}`)
        )
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
    const openWindow = this.props.openWindow;

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
            <img src='http://res.cloudinary.com/dfawecall/image/upload/t_media_lib_thumb/v1501006578/x-symbol_idzbho.png'/>
          </button>
        </header>

        <div className='buddy-list-content'>
          <div className='button-row'>
            <span
              onClick={() => openWindow('createPrivateChat')}
            >
              Chat
            </span>

            <span
              onClick={() => openWindow('addChannel')}
            >
              Find Channel
            </span>

            <span
              onClick={() => openWindow('createChannel')}
            >
              Create Channel
            </span>
          </div>

          <hr className='hr-divider'/>

          <div className='square-title-logo-small'>
            <img src='http://res.cloudinary.com/dfawecall/image/upload/v1500956186/Logomakr_5NM6R1_ibdrdc.png'/>
            <h2>Slink<br/> <em>Instant<br/> Messenger</em></h2>
          </div>

          <hr className='hr-divider'/>

          <ChannelIndexContainer/>
        </div>
      </div>
    );
  }
}
