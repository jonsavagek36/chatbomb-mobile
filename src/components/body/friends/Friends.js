import React, { Component } from 'react';

import Header from './Header';
import List from './List';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='friends'>
        <Header />
        <List />
      </div>
    );
  }
}

export default Friends;
