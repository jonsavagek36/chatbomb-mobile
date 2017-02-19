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
        <Header
          profile={this.props.profile}
            />
        <List
          online_friends={this.props.online_friends}
          selectFriend={this.props.selectFriend}
          selectedFriend={this.props.selectedFriend}
            />
      </div>
    );
  }
}

export default Friends;
