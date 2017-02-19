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
    } else if (this.props.view == 'Chat' && this.props.selectedFriend !== null) {
      view = <Chat selectedFriend={this.props.selectedFriend} sendMessage={this.props.sendMessage} conversationView={this.props.conversationView} sendLive={this.props.sendLive} liveChat={this.props.liveChat} live_messages={this.props.live_messages} removeLiveMessage={this.props.removeLiveMessage} />;
    } else {
      view = null;
    }
    return (
      <div id='appbody'>
        <Friends
          profile={this.props.profile}
          online_friends={this.props.online_friends}
          selectFriend={this.props.selectFriend}
          selectedFriend={this.props.selectedFriend}
            />
        <div id='view'>
          {view}
        </div>
      </div>
    );
  }
}

export default Body;
