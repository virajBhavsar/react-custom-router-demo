import React, { Component } from "react";
import "../static/man.css";

class man extends Component {
  state = {
    option: false,
  };
  showOption = () => {
    this.setState({ option: !this.state.option });
  };

  render() {
    if (this.props.searchString === "") {
      return (
        <div className="man">
          <div className="man-pic"></div>
          <p className="man-name">{this.props.name}</p>
          <button className="option-btn" onClick={this.showOption}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Option option={this.state.option}></Option>
        </div>
      );
    } else if (this.props.name.includes(this.props.searchString)) {
      return (
        <div className="man">
          <div className="man-pic"></div>
          <p className="man-name">{this.props.name}</p>
          <button className="option-btn" onClick={this.showOption}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Option option={this.state.option}></Option>
        </div>
      );
    } else {
      return <span></span>;
    }
  }
}

class Option extends Component {
  render() {
    if (this.props.option) {
      return (
        <ul className="man-option">
          <li>remove</li>
          <li>make bill</li>
          <li>edit</li>
        </ul>
      );
    } else {
      return <span></span>;
    }
  }
}

export default man;
