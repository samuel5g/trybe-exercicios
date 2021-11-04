import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render () {
    const { email, name } = this.state;
    return (
      <form>
        <select>
          <option value="">Casa</option>
          <option value="">Apartamento</option>
          <option value="">Mansão</option>
        </select>
        <input 
          type="text"
          name="name"
          placeholder="seu nome aqui"
          value={ name }
          onChange={ this.handleChange }
        />
        <input
          type="email"
          name="email"
          placeholder="seu email aqui"
          value={ email }
          onChange={ this.handleChange }
        />
        <textarea></textarea>
      </form>
    );
  }
}

export default App;
