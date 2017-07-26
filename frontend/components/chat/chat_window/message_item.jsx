import React from 'react';

export default class MessageItem extends React.Component {

  setHandleScreennameClick(otherId) {
    return e => {
      this.props.createPrivateChannelById(
        [this.props.currentUser.id, otherId]
      ).then(
        ({ channel }) => this.props.addChatWindow(channel.id)
      );
    };
  }

  render() {
    const {
      currentUser,
      message: { authorId, authorScreenname, body },
      createPrivateChannel
    } = this.props;

    const klass = currentUser.screenname === authorScreenname ? (
      'ownUser-message'
    ) : (
      'foreignUser-message'
    );

    return (
      <li>
        <span
          className={klass}
          onClick={this.setHandleScreennameClick(authorId)}
        >
          {authorScreenname}
        </span>: {body}
      </li>
    );
  }
}
