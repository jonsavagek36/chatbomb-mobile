import React, { Component } from 'react';

import Topbar from './topbar/Topbar';
import Body from './body/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ''
    };
    this.changeView = this.changeView.bind(this);
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
