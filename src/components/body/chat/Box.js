import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import LiveText from './LiveText';
import SendText from './SendText';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='chatbox'>
        <ChatHeader selectedFriend={this.props.selectedFriend} />
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
