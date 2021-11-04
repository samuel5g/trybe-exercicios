import './App.css';
import React from 'react';

class App extends React.Component {
  constructor () {
    super();

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    console.log('alou');
  }
  
  handleClick2() {
    console.log('alou de novo');
  }
  
  handleClick3() {
    console.log('alou mais uma vez');
  }

  render() {
    return (
      <p>
        <button onClick={this.handleClick1}>My Button</button>
        <button onClick={this.handleClick2}>My Other Button</button>
        <button onClick={this.handleClick3}>My Another Button</button>
      </p>
    );
  }
}

export default App;
