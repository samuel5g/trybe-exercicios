import './App.css';
import React from 'react';

function handleClick1() {
  console.log('alou');
}

function handleClick2() {
  console.log('alou de novo');
}

function handleClick3() {
  console.log('alou mais uma vez');
}

class App extends React.Component {
  render() {
    return (
      <p>
        <button onClick={handleClick1}>My Button</button>
        <button onClick={handleClick2}>My Other Button</button>
        <button onClick={handleClick3}>My Another Button</button>
      </p>
    );
  }
}

export default App;
