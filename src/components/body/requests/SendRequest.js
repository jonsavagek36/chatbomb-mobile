import React, { Component } from 'react';

class SendRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='sendrequest'>
        <div id='requestheader'>
          Send a Friend Request
        </div>
        <div id='sendrequestform'>
          <input type='text' id='requestform' />
          <button className='formbtn'>send request</button>
        </div>
      </div>
    );
  }
}

export default SendRequest;
