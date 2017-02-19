import React, { Component } from 'react';

class ChatBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let conversation = null;
    if (this.props.conversationView !== undefined) {
      conversation = this.props.conversationView.map((message, idx) => {
        return (
          <li key={idx}>{message.sender_name}: {message.msg}</li>
        );
      });
    }
    return (
      <div className='chatbody'>
        <ul className='nobullets'>
          {conversation}
        </ul>
      </div>
    );
  }
}

export default ChatBody;
