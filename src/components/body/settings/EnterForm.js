import React, { Component } from 'react';

class EnterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='formrow'>
          <div className='new'>
            New Screen Name
          </div>
          <div className='old'>
            Current Screen Name
          </div>
        </div>
        <div className='formrow'>
          <div className='new'>
            <input type='text' id='new-name' />
            <button className='formbtn'>submit</button>
          </div>
          <div className='old'>
            Rick
          </div>
        </div>
        <div className='formrow'>
          <div className='new'>
            New E-Mail
          </div>
          <div className='old'>
            Current E-Mail
          </div>
        </div>
        <div className='formrow'>
          <div className='new'>
            <input type='text' id='new-email' />
            <button className='formbtn'>submit</button>
          </div>
          <div className='old'>
            Morty
          </div>
        </div>
      </div>
    );
  }
}

export default EnterForm;
