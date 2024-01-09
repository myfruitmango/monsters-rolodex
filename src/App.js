import { Component } from "react";
import "./App.css";

// function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    console.log("this constructor");
  }

  componentDidMount() {
    console.log("this componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users").then((respones) =>
      respones.json().then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      )
    );
  }

  render() {
    console.log("this render");
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
