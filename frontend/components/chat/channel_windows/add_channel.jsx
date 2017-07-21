import React from 'react';

export default class AddChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.queryUpdate = this.queryUpdate.bind(this);
  }

  queryUpdate(e) {
    this.setState({ query: e.target.value });
    this.props.queryChannels(e.target.value);
  }

  render() {
    return (
      <form className='add-channel'>
        <label>Add Channel</label>
        <input
          type='text'
          placeholder='Search for channels'
          value={this.state.query}
          onChange={this.queryUpdate}
        />

        <ul>
          {
            this.props.channelQuerys.map((channelQuery, idx) => (
              <li
                key={idx}
                onDoubleClick={() => this.props.addChannel(channelQuery.id)}
              >
                {channelQuery.name}
              </li>
            ))
          }
        </ul>
      </form>
    );
  }
}
