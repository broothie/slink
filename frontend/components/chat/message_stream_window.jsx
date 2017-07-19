import React from 'react';

export default class MessageStreamWindow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.requestAllMessages();
  }

  render() {
    // this.props.messages.map((message, idx) => (
    //   <p key={idx}>
    //     {message.author_screenname}: {message.body}
    //   </p>
    // ))
    return (
      <textarea readOnly value={
        this.props.messages.map(message => (
          `${message.author_screenname}: ${message.body}`
        )).join('\n')
      }/>
    );
  }
}
