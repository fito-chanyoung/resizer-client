import "./css/App.css";
import React, { useState } from "react";
import { Nav } from "./components/nav";

export const App: React.FC<{}> = () => {
  const [isLogin, isLoginSetstate] = useState(false);

  return (
    <div className="App">
      <Nav isLogin={isLogin} />
      <div className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src="./logo512.png" className="App-logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
};
