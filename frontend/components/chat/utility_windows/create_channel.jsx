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
  }

  componentDidMount() {
    $(this.pane).draggable({ handle: 'header' });
    this.input.focus();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state.name).then(this.props.closeWindow);
  }

  bringToFront(e) {
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();
  }

  render() {
    return (
      <form
        className='create-channel'
        ref={pane => { this.pane = pane; }}
        onMouseDown={this.bringToFront}
      >
        <header className='title-bar title-bar-with-exit'>
          New Channel

          <button onClick={this.props.closeWindow}>
            X
          </button>
        </header>

        <div className='create-channel-content'>
          <input
            type='text'
            placeholder='Channel name'
            onChange={this.handleInput}
            value={this.state.name}
            ref={input => {this.input = input;}}
          />

          <footer>
            <ul>
              {
                this.props.errors.map((errorText, idx) => (
                  <li key={idx}>{errorText}</li>
                ))
              }
            </ul>

            <button
              type='submit'
              onClick={this.handleSubmit}
            >
              Create
            </button>
          </footer>
        </div>
      </form>
    );
  }
}
