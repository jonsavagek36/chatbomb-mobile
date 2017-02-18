import React, { Component } from 'react';
import io from 'socket.io-client';

import Topbar from './topbar/Topbar';
import Body from './body/Body';

let socket = io.connect(`http://localhost:5000`);

const tester_one = {
  profile: {
    id: 1,
    screen_name: 'Jon',
    email: 'test1@test.com'
  },
  friends: [2,3]
};
const tester_two = {
  profile: {
    id: 2,
    screen_name: 'Andrew',
    email: 'test2@test.com'
  },
  friends: [1,3]
};
const tester_three = {
  profile: {
    id: 3,
    screen_name: 'Franco',
    email: 'test3@test.com'
  },
  friends: [1,2]
};
let users = [tester_one, tester_two, tester_three];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      profile: {},
      friends: []
    };
    // REACT BINDS
    this.changeView = this.changeView.bind(this);
    // SOCKET BINDS
    // TEST BINDS
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    // INIT
  }

  // SOCKET FUNCTIONS
  chatInit() {
    let data = {
      socket_id: socket.id,
      user: this.state.profile
    };
    socket.emit('user:init', data);
  }

  // REACT FUNCTIONS
  changeView(newView) {
    this.setState({ view: newView });
  }

  // TEST FUNCTIONS
  setUser(user) {
    this.setState({
      profile: user.profile,
      friends: user.friends
    });
  }
  startUser() {
    this.chatInit();
  }

  render() {
    return (
      <div>
        <Topbar
          changeView={this.changeView}
          setUser={this.setUser}
          users={users}
          startUser={this.startUser}
            />
        <Body
          view={this.state.view}
            />
      </div>
    );
  }
}

export default App;
