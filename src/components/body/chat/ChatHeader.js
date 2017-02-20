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
    let time = '00:00';
    if (this.props.timer != null) {
      time = '00:' + this.props.timer.toString();
    }
    return (
      <div className='chatheader'>
        <div className='chatname'>
          {this.props.selectedFriend.screen_name}
        </div>
        <div className='chattimer'>
          {time}
        </div>
        <div className='chatbtns'>
          <img src={'http://img.freepik.com/icones-gratuites/chronometre_318-138757.jpg?size=338&ext=jpg'} className='watchicon' />
          <img src={'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/bomb.png'} className='bombicon' />
        </div>
      </div>
    );
  }
}

export default ChatHeader;
