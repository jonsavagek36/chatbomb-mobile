import React, { Component } from 'react';

import Topbar from './topbar/Topbar';
import Body from './body/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topbar />
        <Body />
      </div>
    );
  }
}

export default App;
