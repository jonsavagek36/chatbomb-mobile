import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import LiveText from './LiveText';
import SendText from './SendText';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null
    };
    this.updateTimer = this.updateTimer.bind(this);
  }

  updateTimer(time) {
    this.setState({ timer: time });
  }

  render() {
    let live = false;
    if (this.props.live_messages.indexOf(this.props.selectedFriend.id) > -1) {
      live = true;
    }
    return (
      <div className='chatbox'>
        <ChatHeader
          selectedFriend={this.props.selectedFriend}
          live={live}
          removeLiveMessage={this.props.removeLiveMessage}
          timer={this.state.timer}
          updateTimer={this.updateTimer}
            />
        <ChatBody
          conversationView={this.props.conversationView}
            />
        <LiveText
          liveChat={this.props.liveChat}
            />
        <SendText
          sendMessage={this.props.sendMessage}
          sendLive={this.props.sendLive}
            />
      </div>
    );
  }
}

export default Box;
