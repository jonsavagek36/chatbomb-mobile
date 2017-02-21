import React, { Component } from 'react';

import Box from './Box';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Box
          selectedFriend={this.props.selectedFriend}
          sendMessage={this.props.sendMessage}
          conversationView={this.props.conversationView}
          sendLive={this.props.sendLive}
          liveChat={this.props.liveChat}
          live_messages={this.props.live_messages}
          removeLiveMessage={this.props.removeLiveMessage}
          updateTimer={this.props.updateTimer}
          timer={this.props.timer}
          extendTimer={this.props.extendTimer}
          nukeChat={this.props.nukeChat}
            />
      </div>
    );
  }
}

export default Chat;
