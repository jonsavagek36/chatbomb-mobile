import React, { Component } from 'react';

import ButtonGroup from './ButtonGroup';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let testers = this.props.users.map((user,idx) => {
      let setUser = () => {
        this.props.setUser(user);
      }
      return <button onClick={setUser}>{idx}</button>
    })
    return (
      <div id='topbar'>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        <div className='bar4'>
          {testers}<button onClick={this.props.startUser}>start</button>
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
