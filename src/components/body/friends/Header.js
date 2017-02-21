import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='friendsheader'>
        <div id='screenname'>
          {this.props.profile.screen_name}
        </div>
        <div id='userpoints'>
          {this.props.profile.points}
        </div>
      </div>
    );
  }
}

export default Header;
