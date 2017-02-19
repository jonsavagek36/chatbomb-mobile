import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='friendsheader'>
        {this.props.profile.screen_name}
      </div>
    );
  }
}

export default Header;
