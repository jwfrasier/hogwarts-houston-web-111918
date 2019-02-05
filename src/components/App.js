import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";

const URL = "http://localhost:3001/hogs";
class App extends Component {
  state = {
    hogs: []
  };

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(hogs => this.setState({ hogs: hogs }));
  }

  render() {
    return (
      <div className="ui grid container">
        <div className=" ui sixteen wide column centered">
          <Nav />
        </div>
        <div className="ui four wide column centered ">
          <HogList hogs={this.state.hogs} />
        </div>
      </div>
    );
  }
}

export default App;
