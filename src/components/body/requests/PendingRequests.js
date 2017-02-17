import React, { Component } from 'react';

class PendingRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id='requestheader'>
          Pending Requests
        </div>
        <div id='pendingrequests'>
        </div>
      </div>
    );
  }
}

export default PendingRequests;
