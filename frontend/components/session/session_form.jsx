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
    this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  componentDidMount() {
    this.screenNameInput.focus();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleDemoClick(e) {
    e.preventDefault();
    this.props.demoSignOn();
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
      ['Sign On', '/signup', 'Get a Screen Name']
    );
  }

  render() {
    if (this.props.signedOn) {
      return <Redirect to='/'/>;
    }

    let [formHeader, authSwitchLink, authSwitchText] = this.formDetails();

    return (
      <main className='session-main'>
        <form
          className='session-form'
          ref={pane => {$(pane).draggable({ handle: 'header' });}}
        >
          <header className='title-bar'>
            {formHeader}
          </header>

          <div className='session-form-content'>
            <div className='square-title-logo'>
              <h1>Slink</h1>
              <h2>Instant Messenger</h2>
            </div>

            <fieldset>
              <label className='screenname'>ScreenName</label>
              <input
                type='text'
                onChange={this.update('screenname')}
                value={this.state.screenname}
                tabIndex='1'
                ref={input => {this.screenNameInput = input;}}
              />
              <Link to={authSwitchLink}>{authSwitchText}</Link>
            </fieldset>

            <fieldset>
              <label>Password</label>
              <input
                type='password'
                onChange={this.update('password')}
                value={this.state.password}
                tabIndex='2'
              />
            </fieldset>

            <fieldset>
              <ul>
                {
                  this.props.errors.map((errorText, idx) => (
                    <li key={idx}>- {errorText}</li>
                  ))
                }
              </ul>

              <div className='buttons'>
                <button
                  onClick={this.handleSubmit}
                  tabIndex='3'
                  type='submit'
                >{formHeader}
                </button>
                <button onClick={this.handleDemoClick}>Demo</button>
              </div>
            </fieldset>
          </div>
        </form>
      </main>
    );
  }
}

export default withRouter(SessionForm);
