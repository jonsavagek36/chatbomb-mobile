import React, { Component } from 'react';

import SendRequest from './SendRequest';
import PendingRequests from './PendingRequests';

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='viewheader'>
          Requests
        </div>
        <div className='content'>
          <SendRequest />
          <PendingRequests />
        </div>
      </div>
    );
  }
}

export default Requests;
