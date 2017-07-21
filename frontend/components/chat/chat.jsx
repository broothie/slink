import React from 'react';
import { Redirect } from 'react-router-dom';
// import ChatWindowContainer from './chat_window_container';
import BuddyListContainer from './buddy_list_container';

// <ChatWindowContainer windowName={'Channel 1'} channelId={1}/>
export default class Chat extends React.Component {
  componentWillMount() {
    this.props.requestUserChannels();
  }

  render() {
    if (!this.props.signedOn) {
      return <Redirect to='/signon'/>;
    }

    return (
      <main className='chat-main'>
        <BuddyListContainer/>

        <br/>

        <button onClick={this.props.signOff}>Sign Off</button>
      </main>
    );
  }
}
