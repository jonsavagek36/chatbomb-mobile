import React, { Component } from 'react';

class SendText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='sendtext'>
        <div className='formrow'>
          <input type='text' id='sendmsg' style={{width:301}} onChange={this.props.sendLive} />
          <button onClick={this.props.sendMessage}>send</button>
        </div>
      </div>
    );
  }
}

export default SendText;
