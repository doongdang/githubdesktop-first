import React, {useState} from "react";

import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  let numberState = useState(props.initNumber)
  let number = numberState[0]
  let setNum =numberState[1]
  return (
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number: {number}</p>
      <input type="button" value="random" onClick={
          function(){
           setNum(Math.random())
          }
        }></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state= {
      number: this.props.initNumber
    }
  render() {
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number: {this.state.number}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
      </div>
    );
  }
}

export default App;
