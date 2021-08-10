import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Josia Almeida',
      counter: 0
    }
    this.handleChangeClick = this.handleChangeClick.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
  }
  handleChangeName() {
    const { name } = this.state
    this.setState({ name: 'Josué' })
  }
  handleChangeClick() {
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }
  render() {
    const { name, counter } = this.state
    return (
      <div className="App">
        <p onClick={this.handleChangeName}>
          Welcome {name} - {counter}
        </p>
        <button onClick= {this.handleChangeClick}>
          Click
        </button>
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
