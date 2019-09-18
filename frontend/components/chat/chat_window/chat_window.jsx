import React from 'react';
import MessageStreamWindowContainer from './message_stream_window_container';

export default class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };

    this.sendSound = new Audio('/audio/imsend.wav');

    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.bringToFront = this.bringToFront.bind(this);
  }

  componentDidMount() {
    $(this.pane).draggable({
      handle: 'header',
      containment: 'body'
     });

    this.pane.style.left = '50px';
    this.pane.style.top = '50px';
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();

    this.input.focus();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  updateMessage(e) {
    this.setState({ message: e.target.value });
  }

  handleSend(e) {
    e.preventDefault();
    this.sendMessage();
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.sendMessage();
    }
  }

  bringToFront(e) {
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();
  }

  sendMessage() {
    this.props.sendMessage(this.state.message).then(() => (
      this.setState({ message: '' })
    )).then(() => {
      this.props.clearErrors();
      return this.sendSound.play();
    });
  }

  render() {
    const channel = this.props.channel;

    return (
      <div
        className='chat-window'
        ref={el => { this.pane = el; } }
        onMouseDown={this.bringToFront}
      >
        <header className='title-bar title-bar-with-exit'>
          {channel.name} - Instant Message

          <button
            onClick={() => this.props.closeWindow()}
          >
            <img src='https://res.cloudinary.com/dfawecall/image/upload/t_media_lib_thumb/v1501006578/x-symbol_idzbho.png'/>
          </button>
        </header>

        <hr className='hr-divider'/>

        <div className='chat-window-content'>
          <MessageStreamWindowContainer
            channel={channel}
            cable={this.props.cable}
          />

          <hr className='hr-divider'/>

          <textarea
            value={this.state.message}
            onChange={this.updateMessage}
            onKeyPress={this.handleEnter}
            rows='2'
            ref={input => {this.input = input;}}
          />

          <footer>
            <button
              onClick={this.handleSend}
            >
              Send
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
