import React from 'react';

export default class CreatePrivateChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      userQueryResults: [],
      selectedUsers: []
    };

    this.bringToFront = this.bringToFront.bind(this);
    this.queryUpdate = this.queryUpdate.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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

    this.userQueryInput.focus();
  }

  componentWillReceiveProps(nextProps) {
    const selectedUserIds = this.state.selectedUsers.map(user => user.id);
    const filteredQueryResults = nextProps.userQueries.filter(user => (
      !selectedUserIds.includes(user.id)
    ));

    this.setState({
      userQueryResults: filteredQueryResults
    });
  }

  queryUpdate(e) {
    this.setState({ query: e.target.value });
    this.props.queryUsers(e.target.value);
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.state.userQueryResults.length === 0) {
        return;
      }

      const newSelectedUsers = this.state.selectedUsers.concat(
        this.state.userQueryResults[0]
      );

      this.setState({
        query: '',
        userQueryResults: [],
        selectedUsers: newSelectedUsers
      });
    }
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.createPrivateChannel(
  //     this.state.screennames.split(',').map(name => name.trim())
  //   ).then(
  //     this.props.closeWindow()
  //   );
  // }

  bringToFront(e) {
    this.pane.style.zIndex = this.props.zIndex;
    this.props.incrementZIndex();
  }

  render() {
    return (
      <form
        className='create-private-chat'
        ref={el => { this.pane = el; }}
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
            onKeyPress={this.handleEnter}
            ref={el => {this.userQueryInput = el;}}
          />

          <ul>
            {
              this.state.userQueryResults.map((userQuery, idx) => (
                <li key={idx}>
                  {userQuery.screenname}
                </li>
              ))
            }
          </ul>

          <br/>

          <ul>
            {
              this.state.selectedUsers.map((selectedUser, idx) => (
                <li key={idx}>
                  {selectedUser.screenname}
                </li>
              ))
            }
          </ul>
        </div>
      </form>
    );
  }
}
