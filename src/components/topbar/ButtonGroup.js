import React, { Component } from 'react';

import Button from './Button';

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttons = ['Settings','Requests','Chat'];
  }

  render() {
    let buttons = this.buttons.map(button => {
      let changeView = () => {
        this.props.changeView(button);
      }
      return (
        <Button
          name={button}
          changeView={changeView}
            />
      );
    });
    return (
      <div id='buttongroup'>
        {buttons}
      </div>
    );
  }
}

export default ButtonGroup;
