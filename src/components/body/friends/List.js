import React, { Component } from 'react';

import Nameplate from './Nameplate';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let friends = null;
    let newClass;
    if (this.props.online_friends !== undefined) {
      friends = this.props.online_friends.map((friend, idx) => {
        let selectFriend = () => {
          this.props.selectFriend(friend);
        }
        if (this.props.selectedFriend.id == friend.id) {
          newClass = 'selectednameplate';
        } else {
          newClass = 'nameplate';
        }
        return (
          <Nameplate
            friend={friend}
            key={idx}
            selectFriend={selectFriend}
            newClass={newClass}
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
