import React, { Component } from 'react';

import Friends from './friends/Friends';
import Settings from './settings/Settings';
import Requests from './requests/Requests';
import Chat from './chat/Chat';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let view;
    if (this.props.view == 'Settings') {
      view = <Settings />;
    } else if (this.props.view == 'Requests') {
      view = <Requests />;
    } else if (this.props.view == 'Chat') {
      view = <Chat />;
    } else {
      view = null;
    }
    return (
      <div id='appbody'>
        <Friends
          profile={this.props.profile}
          online_friends={this.props.online_friends}
            />
        <div id='view'>
          {view}
        </div>
      </div>
    );
  }
}

export default Body;
