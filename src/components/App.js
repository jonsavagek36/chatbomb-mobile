import React, { Component } from 'react';
import io from 'socket.io-client';

import Topbar from './topbar/Topbar';
import Body from './body/Body';

let socket = io.connect(`http://localhost:5000`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ''
    };
    // REACT BINDS
    this.changeView = this.changeView.bind(this);
    // SOCKET BINDS
  }

  componentDidMount() {
    // INIT
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div>
        <Topbar
          changeView={this.changeView}
            />
        <Body
          view={this.state.view}
            />
      </div>
    );
  }
}

export default App;
