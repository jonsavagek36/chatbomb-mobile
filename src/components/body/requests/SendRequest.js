import React, { Component } from 'react';

class SendRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='sendrequest'>
        <div className='formrow'>
          Invite a friend!
        </div>
        <div className='formrow'>
          <input type='text' id='invitefriend' />
          <button className='formbtn'>send invite</button>
        </div>
        <div className='formrow'>
          Send a Friend Request
        </div>
        <div className='formrow'>
          <input type='text' id='requestform' />
          <button className='formbtn'>send request</button>
        </div>
      </div>
    );
  }
}

export default SendRequest;
