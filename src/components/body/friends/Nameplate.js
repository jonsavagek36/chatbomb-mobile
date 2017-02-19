import React, { Component } from 'react';

class Nameplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='nameplate'>
        {this.props.friend.screen_name}
      </div>
    );
  }
}

export default Nameplate;
