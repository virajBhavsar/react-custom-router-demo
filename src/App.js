import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Main from "./components/main";
import Sidenav from "./components/sideNav";
import Login from "./components/login";

class App extends Component {
  state = {
    logedIn: true,
    index: 0,
    mainState: ["home", "customers", "party", "bills", "products"],
  };

  changeMain = (e) => {
    this.setState({
      index: parseInt(this.state.mainState.indexOf(e.target.id)),
    });
  };

  handleToogleLogin = () => {
    this.setState({ logedIn: !this.state.logedIn });
  };

  render() {
    if (this.state.logedIn) {
      return (
        <div className="container">
          <Nav
            mainState={this.state.mainState[this.state.index]}
            handleToogleLogin={this.handleToogleLogin}
          ></Nav>
          <Sidenav
            index={this.state.index}
            mainState={this.state.mainState}
            changeMain={this.changeMain}
          ></Sidenav>
          <Main mainState={this.state.mainState[this.state.index]}></Main>
        </div>
      );
    } else {
      return (
        <div className="loginBody">
          <Login handleToogleLogin={this.handleToogleLogin}></Login>
        </div>
      );
    }
  }
}

export default App;
