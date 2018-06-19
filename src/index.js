import React from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person";

import "./styles.css";

class App extends React.Component {
  state = {
    persons: [
      { name: "Tejas", age: 32 },
      { name: "Vikky", age: 23 },
      { name: "Shiva", age: 23 }
    ],
    error: "",
    currentIndex: 0
  };
  prevIndexHandler = () => {
    let cIndex = this.state.currentIndex;
    this.setState({ error: "" });
    let msg = "";
    cIndex > 0 ? (cIndex = cIndex - 1) : (msg = "Can not go further back.");
    if (msg === "") {
      this.setState({ currentIndex: cIndex });
    } else {
      this.setState({ error: msg, currentIndex: cIndex - 1 });
      msg = "";
    }
  };
  nextIndexHandler = () => {
    let cIndex = this.state.currentIndex;
    let msg = "";
    this.setState({ error: "" });

    cIndex < this.state.persons.length - 1
      ? (cIndex = cIndex + 1)
      : (msg = "Can not go further back.");
    if (msg === "") {
      this.setState({ currentIndex: cIndex });
    } else {
      this.setState({ error: msg, currentIndex: cIndex + 1 });
      msg = "";
    }
  };
  render() {
    return (
      <div className="App">
        <p>{this.state.error}</p>
        <button onClick={this.prevIndexHandler}> Previous </button>
        {this.state.error === "" ? (
          <Person
            name={this.state.persons[this.state.currentIndex].name}
            age={this.state.persons[this.state.currentIndex].age}
          />
        ) : null}
        <button onClick={this.nextIndexHandler}> Next </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
