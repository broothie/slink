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
    $(this.pane).draggable({
      handle: 'header',
      containment: 'body'
    });

    this.pane.style.right = '300px';
    this.pane.style.top = '50px';
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();

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
      return this.props.addChannel(id);
    };
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
          >
            <img src='http://res.cloudinary.com/dfawecall/image/upload/t_media_lib_thumb/v1501006578/x-symbol_idzbho.png'/>
          </button>
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
              this.props.channelQueries.map((channelQuery, idx) => (
                <li
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
      </form>
    );
  }
}
