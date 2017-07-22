import React from 'react';
import MessageStreamWindowContainer from './message_stream_window_container';

export default class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };

    this.sendSound = new Audio(
      'http://gauss.ececs.uc.edu/Courses/c653/lectures/AIM/sound/imsend.wav'
    );

    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSend = this.handleSend.bind(this);
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

  sendMessage() {
    this.props.sendMessage(this.state.message).then(() => (
      this.setState({ message: '' })
    )).then(() => (this.sendSound.play()));
  }

  render() {
    const channel = this.props.channel;

    return (
      <div className='chat-window'>
        <header className='title-bar title-bar-with-exit'>
          {channel.name} - Instant Message
          <button
            onClick={() => this.props.closeWindow()}
          >
            X
          </button>
        </header>

        <hr className='hr-divider'/>

        <div className='chat-window-content'>
          <MessageStreamWindowContainer channel={channel}/>

          <hr className='hr-divider'/>

          <textarea
            value={this.state.message}
            onChange={this.updateMessage}
            onKeyPress={this.handleEnter}
            rows='2'
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
