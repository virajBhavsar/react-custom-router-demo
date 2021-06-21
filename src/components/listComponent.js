import React, { Component } from "react";

class listComponent extends Component {
  setClass(x) {
    return this.props.index === x ? "active-home" : " ";
  }
  render() {
    let x = [
      "fa fa-home",
      "fa fa-child",
      "fa fa-group",
      "fa fa-book",
      "fa fa-product-hunt",
    ];
    return (
      <React.Fragment>
        {this.props.mainState.map((name) => (
          <li
            id={name}
            key={this.props.mainState.indexOf(name)}
            onClick={this.props.changeMain}
            className={this.setClass(this.props.mainState.indexOf(name))}
          >
            <i className={x[this.props.mainState.indexOf(name)]}></i>
            {"    "}

            {name}
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default listComponent;
