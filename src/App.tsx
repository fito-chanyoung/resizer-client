import "./App.css";
import React from "react";
import Counter from "./components/counter";
import { hot } from "react-hot-loader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Counter name="song" />
        </a>
      </header>
    </div>
  );
}

export default hot(module)(App);
