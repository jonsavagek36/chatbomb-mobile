import React, { Component } from 'react';
import io from 'socket.io-client';

import Topbar from './topbar/Topbar';
import Body from './body/Body';

import user_one from './test/user_one';
import user_two from './test/user_two';
import user_three from './test/user_three';
import friends_one from './test/friends_one';
import friends_two from './test/friends_two';
import friends_three from './test/friends_three';

let socket = io.connect(`http://localhost:5000`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      profile: {},
      friends: [],
      online_friends: []
    };
    // REACT BINDS
    this.changeView = this.changeView.bind(this);
    // SOCKET BINDS
    // TEST BINDS
    this.userOne = this.userOne.bind(this);
    this.userTwo = this.userTwo.bind(this);
    this.userThree = this.userThree.bind(this);
  }

  componentDidMount() {
    // INIT
    // SOCKET EVENTS
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
  userOne() {
    this.setState({
      profile: user_one,
      friends: friends_one
    });
  }
  userTwo() {
    this.setState({
      profile: user_two,
      friends: friends_two
    });
  }
  userThree() {
    this.setState({
      profile: user_three,
      friends: friends_three
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
          userOne={this.userOne}
          userTwo={this.userTwo}
          userThree={this.userThree}
          startUser={this.startUser}
            />
        <Body
          view={this.state.view}
          profile={this.state.profile}
            />
      </div>
    );
  }
}

export default App;
