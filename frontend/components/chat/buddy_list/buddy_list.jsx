import React from 'react';
import ChannelIndexContainer from './channel_index_container';

export default class BuddyList extends React.Component {
  constructor(props) {
    super(props);

    this.bringToFront = this.bringToFront.bind(this);
  }

  componentDidMount() {
    $(this.pane).draggable({ handle: 'header' });
    this.pane.style.right = '50px';
    this.pane.style.top = '50px';
  }

  bringToFront(e) {
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();
  }

  render() {
    const { signOff, openWindow } = this.props;

    return (
      <div
        className='buddy-list'
        ref={pane => { this.pane = pane; }}
        onMouseDown={this.bringToFront}
      >
        <header className='title-bar'>Channel List</header>
        <div className='buddy-list-content'>
          <div className='button-row'>
            <button
              onClick={() => openWindow('addChannel')}
            >
              Add Channel
            </button>

            <button
              onClick={() => openWindow('createChannel')}
            >
              New Channel
            </button>
          </div>

          <hr className='hr-divider'/>

          <ChannelIndexContainer/>

          <hr className='hr-divider'/>

          <footer>
            <button onClick={signOff}>Sign Off</button>
          </footer>
        </div>
      </div>
    );
  }
}
