import React, { Component } from 'react';

class ChatHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.timerId = '';
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.live && nextProps.timer == null) {
      this.startTimer();
    } else if (this.props.live && nextProps.live == false) {
      this.stopTimer();
    }
  }

  startTimer() {
    let _ = this;
    _.props.updateTimer(30);
    let start = Date.now();
    let diff;
    let seconds;
    function timer() {
      diff = 30 - (((Date.now() - start) / 1000) | 0);
      seconds = (diff % 60) | 0;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      _.props.updateTimer(seconds);
      if (seconds == 0) {
        _.props.removeLiveMessage(true);
      }
      if (diff <= 0) {
        start = Date.now() + 1000;
      }
    };
    timer();
    _.timerId = setInterval(timer, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.props.updateTimer(null);
  }

  render() {
    return (
      <div className='chatheader'>
        {this.props.selectedFriend.screen_name}
        {this.props.timer}
      </div>
    );
  }
}

export default ChatHeader;
