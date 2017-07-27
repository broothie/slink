import React from 'react';

export default class CreateChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    this.input.focus();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(e) {
    this.setState({ name: e.target.value });
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.createChannel(this.state.name).then(
        ({ channel }) => this.props.addChatWindow(channel.id)
      ).then(
        () => this.props.closeWindow()
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state.name).then(
      ({ channel }) => this.props.addChatWindow(channel.id)
    ).then(
      () => this.props.closeWindow()
    );
  }

  bringToFront(e) {
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();
  }

  render() {
    return (
      <div
        className='create-channel'
        ref={pane => { this.pane = pane; }}
        onMouseDown={this.bringToFront}
      >
        <header className='title-bar title-bar-with-exit'>
          Create Channel

          <button onClick={this.props.closeWindow}>
            <img src='http://res.cloudinary.com/dfawecall/image/upload/t_media_lib_thumb/v1501006578/x-symbol_idzbho.png'/>
          </button>
        </header>

        <div className='create-channel-content'>
          <div>
          <input
            type='text'
            placeholder='Channel name'
            onChange={this.handleInput}
            value={this.state.name}
            onKeyPress={this.handleEnter}
            ref={input => {this.input = input;}}
          />

          <button
            type='submit'
            onClick={this.handleSubmit}
          >
            Create
          </button>
          </div>

          <footer>
            <ul>
              {
                this.props.errors.map((errorText, idx) => (
                  <li key={idx}>{errorText}</li>
                ))
              }
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}
