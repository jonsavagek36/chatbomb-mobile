import React, { Component } from 'react';

import Topbar from './topbar/Topbar';
import Body from './body/Body';

import user_one from './test/user_one';
import user_two from './test/user_two';
import user_three from './test/user_three';
import friends_one from './test/friends_one';
import friends_two from './test/friends_two';
import friends_three from './test/friends_three';

let socket = io.connect('http://localhost:5000');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      profile: {},
      friends: [],
      online_friends: [],
      refreshId: '',
      selectedFriend: {},
      conversations: {}
    };
    // REACT BINDS
    this.changeView = this.changeView.bind(this);
    this.selectFriend = this.selectFriend.bind(this);
    // SOCKET BINDS
    this.chatInit = this.chatInit.bind(this);
    this.refreshRequest = this.refreshRequest.bind(this);
    this.refreshFriends = this.refreshFriends.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.receiveMessage = this.receiveMessage.bind(this);
    // TEST BINDS
    this.userOne = this.userOne.bind(this);
    this.userTwo = this.userTwo.bind(this);
    this.userThree = this.userThree.bind(this);
    this.startUser = this.startUser.bind(this);
  }

  componentDidMount() {
    // INIT
    // SOCKET EVENTS
    socket.on('test', this.testSock);
    socket.on('friends:refreshed', this.refreshFriends);
    socket.on('receive:message', this.receiveMessage);
  }

  // SOCKET FUNCTIONS
  testSock(data) {
    console.log(data.msg);
  }

  chatInit() {
    let data = {
      socket_id: socket.id,
      user: this.state.profile
    };
    socket.emit('user:init', data);
    let id = setInterval(this.refreshRequest, 2500);
    this.setState({ refreshId: id });
  }

  refreshRequest() {
    socket.emit('refresh:friends', { friends: this.state.friends });
  }

  refreshFriends(data) {
    this.setState({ online_friends: data.online_friends });
  }

  sendMessage() {
    let me = this.state.profile;
    let target = this.state.selectedFriend;
    let convos = this.state.conversations;
    let convoCode = target.id;
    let textNode = document.getElementById('sendmsg');
    let message = {
      sender_id: me.id,
      target_id: target.id,
      sender_name: me.screen_name,
      target_name: target.screen_name,
      msg: textNode.value
    };
    if (convos[convoCode] == undefined) {
      convos[convoCode] = [];
    }
    let last = convos[convoCode].length - 1;
    if (last > -1) {
      if (convos[convoCode][last].sender_id != me.id) {
        convos[convoCode].push(message);
        socket.emit('send:message', message);
      }
    } else {
      convos[convoCode].push(message);
      socket.emit('send:message', message);
    }
    textNode.value = '';
  }

  receiveMessage(data) {
    let me = this.state.profile;
    let convos = this.state.conversations;
    let convoCode = data.sender_id;
    if (convos[convoCode] == undefined) {
      convos[convoCode] = [];
    }
    convos[convoCode].push(data);
    me.points += 1;
    this.setState({
      conversations: convos,
      profile: me
    });
  }

  // REACT FUNCTIONS
  changeView(newView) {
    this.setState({ view: newView });
  }

  selectFriend(friend) {
    this.setState({ selectedFriend: friend });
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
    let conversationView = null;
    if (this.state.selectedFriend !== undefined) {
      conversationView = this.state.conversations[this.state.selectedFriend.id];
    }
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
          online_friends={this.state.online_friends}
          selectFriend={this.selectFriend}
          selectedFriend={this.state.selectedFriend}
          sendMessage={this.sendMessage}
          conversationView={conversationView}
            />
      </div>
    );
  }
}

export default App;
