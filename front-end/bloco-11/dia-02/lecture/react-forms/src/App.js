import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
    }
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    })
  }
  render () {
    const { email } = this.state;
    return (
      <form>
        <select></select>
        <input type="text"></input>
        <input type="email" value={ email } onChange={ this.handleChange }></input>
        <textarea></textarea>
      </form>
    );
  }
}

export default App;
