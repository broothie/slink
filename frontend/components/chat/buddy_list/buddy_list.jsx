import React from 'react';
import ChannelIndex from './channel_index';

export default class BuddyList extends React.Component {

  render() {
    return (
      <div className='buddy-list'>
        <ChannelIndex channelInfos={this.props.channelInfos}/>
      </div>
    );
  }
}
