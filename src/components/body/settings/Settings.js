import React, { Component } from 'react';

import EnterForm from './EnterForm';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='viewheader'>
          Settings
        </div>
        <div className='content'>
          <EnterForm />
        </div>
      </div>
    );
  }
}

export default Settings;
