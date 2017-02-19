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
        <div className='bar4'>
          <button onClick={this.props.userOne}>user1</button>
          <button onClick={this.props.userTwo}>user2</button>
          <button onClick={this.props.userThree}>user3</button>
          <button onClick={this.props.startUser}>start</button>
        </div>
        <div className='bar5'>
          <ButtonGroup
            changeView={this.props.changeView}
              />
        </div>
      </div>
    );
  }
}

export default Topbar;
