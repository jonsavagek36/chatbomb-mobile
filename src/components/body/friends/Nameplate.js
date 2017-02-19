import React, { Component } from 'react';

class Nameplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='nameplate' onClick={this.props.selectFriend} className={this.props.newClass}>
        {this.props.friend.screen_name}
      </div>
    );
  }
}

export default Nameplate;
