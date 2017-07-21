import React from 'react';
import ChannelIndexContainer from './channel_index_container';

export default class BuddyList extends React.Component {

  render() {
    return (
      <div className='buddy-list'>
        <ChannelIndexContainer channelInfos={this.props.channelInfos}/>
      </div>
    );
  }
}
