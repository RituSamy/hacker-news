import React, { Component } from "react";
import "./App.css";
import Stories from "./containers/stories-container";
import NavBar from "./containers/navbar-container";

class App extends Component {
  state = {
    isLoaded: false,
    items: [],
    stories: [],
    page: 0,
  };

  render() {
    return (
      <div
        className="App"
        style={{
          marginLeft: 100,
          marginRight: 100,
          backgroundColor: "#F6F6EF",
        }}
      >
        <NavBar />
        <Stories />
      </div>
    );
  }
}

export default App;
