import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='topbutton'>
        {this.props.name}
      </div>
    );
  }
}

export default Button;
