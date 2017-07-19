import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenname: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  formDetails() {
    // Generates form header, auth switch link path, and switch link text for
    //  auth form depending on formType
    return this.props.formType === '/signup' ? (
      ['Sign Up', '/signon', 'Sign On']
    ) : (
      ['Sign On', '/signup', 'Sign Up']
    );
  }

  render() {
    if (this.props.signedOn) {
      return <Redirect to='/'/>;
    }

    let [formHeader, authSwitchLink, authSwitchText] = this.formDetails();

    return (
      <form>
        <h2>{formHeader}</h2>
        <p>or <Link to={authSwitchLink}>{authSwitchText}</Link></p>

        <label>ScreenName
          <input
            type='text'
            onChange={this.update('screenname')}
            value={this.state.screenname}
          />
        </label>

        <label>Password
          <input
            type='password'
            onChange={this.update('password')}
            value={this.state.password}
          />
        </label>

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default withRouter(SessionForm);
