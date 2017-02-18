import React, { Component } from 'react';

import NewRequest from './NewRequest';

class PendingRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='formrow'>
          Pending Requests
        </div>
        <div id='pendingrequests'>
        </div>
      </div>
    );
  }
}

export default PendingRequests;
