import React, { Component } from "react";
import "../static/bills.css";

class Bill extends Component {
  render() {
    return (
      <div className="bill">
        <h4 className="name">x-man</h4>
        <h4>bill-no</h4>
        <h4>states</h4>
      </div>
    );
  }
}

class bills extends Component {
  state = {
    billTypeIndex: 0,
  };

  setClass(x) {
    return this.state.billTypeIndex === x ? "bills-type-btn-active" : " ";
  }

  activeBillType = (e) => {
    let arr = ["all-bills", "credit-bills", "debit-bills"];
    this.setState({ billTypeIndex: arr.indexOf(e.target.className) });
  };

  render() {
    return (
      <div className="bills">
        <div className="bills-nav">
          <input placeholder="search" type="text"></input>
          <h2>Genrate bill</h2>
        </div>
        <div className="bills-type-btns">
          <span className={this.setClass(0)} onClick={this.activeBillType}>
            <button className="all-bills">All</button>
          </span>
          <span className={this.setClass(1)} onClick={this.activeBillType}>
            <button className="credit-bills">credit bills</button>
          </span>
          <span className={this.setClass(2)} onClick={this.activeBillType}>
            <button className="debit-bills">debit bills</button>
          </span>
        </div>
        <div className="bill-list">
          <Bill></Bill>
          <Bill></Bill>
          <Bill></Bill>
          <Bill></Bill>
          <Bill></Bill>
        </div>
      </div>
    );
  }
}

export default bills;
