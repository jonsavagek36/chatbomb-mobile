import React, { Component } from 'react';

import Nameplate from './Nameplate';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let friends = null;
    if (this.props.online_friends !== undefined) {
      friends = this.props.online_friends.map((friend, idx) => {
        return (
          <Nameplate
            friend={friend}
            key={idx}
              />
        );
      });
    }
    return (
      <div id='friendslist'>
        {friends}
      </div>
    );
  }
}

export default List;
