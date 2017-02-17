import React, { Component } from 'react';

import ButtonGroup from './ButtonGroup';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='topbar'>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        <div className='bar4'></div>
        <div className='bar5'>
          <ButtonGroup />
        </div>
      </div>
    );
  }
}

export default Topbar;
