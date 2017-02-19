import React, { Component } from 'react';

class ChatHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='chatheader'>
        {this.props.selectedFriend.screen_name}
      </div>
    );
  }
}

export default ChatHeader;
