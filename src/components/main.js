import React, { Component } from "react";
import Home from "./home";
import Customers from "./customers";
import Party from "./party";
import Bills from "./bills";
import Products from "./products";

class main extends Component {
  render() {
    if (this.props.mainState === "home") {
      return <Home></Home>;
    } else if (this.props.mainState === "customers") {
      
      return <Customers></Customers>;
    } else if (this.props.mainState === "party") {
      return <Party></Party>;
    } else if (this.props.mainState === "bills") {
      return <Bills></Bills>;
    } else if (this.props.mainState === "products") {
      return <Products></Products>;
    } else {
      return <span></span>;
    }
  }
}

export default main;
