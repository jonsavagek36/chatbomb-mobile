import React, { Component } from 'react';

class EnterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='enterform'>
        <div className='new'>
          <input type='text' id='new-name' />
          <button className='formbtn'>submit</button>
        </div>
        <div className='old'>
          Rick
        </div>
        <div className='new'>
          <input type='text' id='new-email' />
          <button className='formbtn'>submit</button>
        </div>
        <div className='old'>
          Morty
        </div>
      </div>
    );
  }
}

export default EnterForm;
