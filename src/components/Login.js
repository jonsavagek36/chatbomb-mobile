import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{height:'175px'}}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
          <div className='bar4'></div>
          <div className='bar5'></div>
        </div>
        <div className='centerdiv'>
          FB Login Button
        </div>
      </div>
    );
  }
}

export default Login;
