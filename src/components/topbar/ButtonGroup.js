import React, { Component } from 'react';

import Button from './Button';

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='buttongroup'>
        <Button
          name='Settings'
            />
        <Button
          name='Requests'
            />
        <Button
          name='Chat'
            />
      </div>
    );
  }
}

export default ButtonGroup;
