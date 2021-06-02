import logo from './logo.svg';
import './App.css';
import React, { Component, useDebugValue } from "react";
/* forma 1: funcion
function Hello(props) {
  return <h1>{ props.title }</h1>
}
*/

//forma 2: class
class Hello extends Component {
  render() {
  return(<h1>{this.props.title}</h1>)
  }
}

class Text extends Component {
  render() {
    const mappedNums = this.props.array.map(n => n*2)
    return(
    <div>
      <p>{this.props.text}</p>
      <p>{mappedNums.join(", ")}</p>
      <p>{this.props.objects.key}</p>
    </div>)
  }
}

const title = "Hello there"

class App extends Component{
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title={ title }/>
        <Text 
        text="hey!" 
        number={2+2}
        array={[1,2,3,4,5]}
        objects={{ key: 2, key2: "value"}}
        />
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
  }
}

export default App;
