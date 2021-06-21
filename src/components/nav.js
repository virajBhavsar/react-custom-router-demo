import React, { Component } from "react";

class nav extends Component {
  render() {
    return (
      <div className="nav">
        <h1>{this.props.mainState}</h1>
        <li onClick={this.props.handleToogleLogin}>log out</li>
      </div>
    );
  }
}

export default nav;
