import React from 'react';
import { Redirect } from 'react-router-dom';
import BuddyListContainer from './buddy_list/buddy_list_container';

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
