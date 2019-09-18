import React from 'react';

export default class AddChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.queryUpdate = this.queryUpdate.bind(this);
    this.bringToFront = this.bringToFront.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidMount() {
    $(this.pane).draggable({
      handle: 'header',
      containment: 'body'
    });

    this.pane.style.right = '350px';
    this.pane.style.top = '50px';
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();

    this.setState({ query: '' });
    this.props.queryChannels('');

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
  }

  setHandleClick(id) {
    return e => {
      e.preventDefault();
      this.props.addChannel(id).then(
        ({ channel }) => this.props.addChatWindow(channel.id)
      ).then(
        () => this.props.closeWindow()
      );
    };
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (this.props.channelQueryResults.length === 0) {
        return;
      }

      const channel = this.props.channelQueryResults[0];
      this.setHandleClick(channel.id)(e);
    }
  }

  render() {
    return (
      <div
        className='add-channel'
        ref={pane => { this.pane = pane; }}
        onMouseDown={this.bringToFront}
      >
        <header className='title-bar title-bar-with-exit'>
          Find Channel

          <button
            onClick={this.props.closeWindow}
          >
            <img src='https://res.cloudinary.com/dfawecall/image/upload/t_media_lib_thumb/v1501006578/x-symbol_idzbho.png'/>
          </button>
        </header>

        <div className='add-channel-content'>
          <input
            type='text'
            placeholder='Search for channels'
            value={this.state.query}
            onChange={this.queryUpdate}
            ref={input => { this.input = input; }}
            onKeyPress={this.handleEnter}
          />

          <ul>
            {
              this.props.channelQueryResults.map((channelQuery, idx) => (
                <li
                  onDoubleClick={this.setHandleClick(channelQuery.id)}
                  key={idx}
                >
                  {channelQuery.name}
                  <button
                    onClick={this.setHandleClick(channelQuery.id)}
                  >
                    Add
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
