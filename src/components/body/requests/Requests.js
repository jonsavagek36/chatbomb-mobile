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
        <SendRequest />
        <PendingRequests />
      </div>
    );
  }
}

export default Requests;
