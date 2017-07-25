import React from 'react';

export default class CreatePrivateChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.bringToFront = this.bringToFront.bind(this);
    this.queryUpdate = this.queryUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $(this.pane).draggable({ handle: 'header' });

    this.pane.style.right = '300px';
    this.pane.style.top = '50px';
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();

    this.input.focus();
  }

  queryUpdate(e) {
    this.setState({ query: e.target.value });
    this.props.queryUsers(e.target.value);
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
          Create New Private Chat

          <button
            onClick={this.props.closeWindow}
          >
            <img src='http://res.cloudinary.com/dfawecall/image/upload/t_media_lib_thumb/v1501006578/x-symbol_idzbho.png'/>
          </button>
        </header>

        <div className='create-private-chat-content'>
          <input
            type='text'
            placeholder='Search for users'
            value={this.state.query}
            onChange={this.queryUpdate}
            ref={input => {this.input = input;}}
          />

          <ul>
            {
              this.props.userQueries.map((userQuery, idx) => (
                <li key={idx}>
                  {userQuery.screenname}
                </li>
              ))
            }
          </ul>
        </div>
      </form>
    );
  }
}
