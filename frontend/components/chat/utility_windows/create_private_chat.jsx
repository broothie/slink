import React from 'react';

export default class CreatePrivateChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screennames: ''
    };

    this.bringToFront = this.bringToFront.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $(this.pane).draggable({ handle: 'header' });

    this.pane.style.right = '300px';
    this.pane.style.top = '50px';
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();

    // this.input.focus();
  }

  handleUpdate(e) {
    this.setState({ screennames: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPrivateChannel(
      this.state.screennames.split(',').map(name => name.trim())
    ).then(
      this.props.closeWindow()
    );
  }

  bringToFront(e) {
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();
  }

  render() {
    return (
      <form
        className='create-private-chat'
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

        <div className='create-private-chat-content'>
          <textarea
            onChange={this.handleUpdate}
            value={this.state.screennames}
          />

          <button
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
