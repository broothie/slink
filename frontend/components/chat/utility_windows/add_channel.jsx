import React from 'react';

export default class AddChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.queryUpdate = this.queryUpdate.bind(this);
    this.bringToFront = this.bringToFront.bind(this);
  }

  componentDidMount() {
    $(this.pane).draggable({ handle: 'header' });

    this.pane.style.right = '300px';
    this.pane.style.top = '50px';

    this.input.focus();
  }

  componentWillUnmount() {
    this.props.clearChannelsList();
  }

  queryUpdate(e) {
    this.setState({ query: e.target.value });
    this.props.queryChannels(e.target.value);
  }

  bringToFront(e) {
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();
    console.log('pane', this.pane);
  }

  render() {
    return (
      <form
        className='add-channel'
        ref={pane => { this.pane = pane; }}
        onMouseDown={this.bringToFront}
      >
        <header className='title-bar title-bar-with-exit'>
          Add Channel

          <button
            onClick={this.props.closeWindow}
          >X</button>
        </header>

        <div className='add-channel-content'>
          <input
            type='text'
            placeholder='Search for channels'
            value={this.state.query}
            onChange={this.queryUpdate}
            ref={input => {this.input = input;}}
          />

          <ul>
            {
              this.props.channelQuerys.map((channelQuery, idx) => (
                <li
                  key={idx}
                  onDoubleClick={() => this.props.addChannel(channelQuery.id)}
                >
                  {channelQuery.name}
                </li>
              ))
            }
          </ul>
        </div>
      </form>
    );
  }
}
