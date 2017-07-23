import React from 'react';
import { Redirect } from 'react-router-dom';
import BuddyListContainer from './buddy_list/buddy_list_container';
import UtilityWindowsContainer from './utility_windows/utility_windows_container';
import ChatWindowIndexContainer from './chat_window/chat_window_index_container';

export default class Chat extends React.Component {
  componentWillMount() {
    this.props.createCable();
  }

  render() {
    if (!this.props.signedOn) {
      return <Redirect to='/signon'/>;
    }

    return (
      <main className='chat-main'>
        <BuddyListContainer/>

        <UtilityWindowsContainer/>
        
        <ChatWindowIndexContainer/>
      </main>
    );
  }
}
