import React, { Component } from "react";
import "../static/customers.css";
import Man from "./man";
import CustomersForm from "./customersForm";

class products extends Component {
  state = {
    form: false,
    index: 0,
    searchString: "",
    mans: [
      {
        firstName: "fname",
        lastName: "lname",
        streetSociety: "ss",
        cityVillage: "cv",
        district: "dist",
        State: "state",
        PhoneNo: "phoneNo",
      },
    ],
  };

  addCustomers = (fname, lname, ss, cv, dist, state, phoneNo) => {
    this.setState({
      mans: [
        ...this.state.mans,
        {
          firstName: fname,
          lastName: lname,
          streetSociety: ss,
          cityVillage: cv,
          district: dist,
          State: state,
          PhoneNo: phoneNo,
        },
      ],
    });
  };

  showForm = () => {
    this.setState({ form: !this.state.form });
  };

  search = (e) => {
    this.setState({ searchString: e.target.value });
  };
  render() {
    if (this.state.form) {
      return (
        <CustomersForm
          addCustomers={this.addCustomers}
          showForm={this.showForm}
        ></CustomersForm>
      );
    } else {
      return (
        <div className="customers">
          <div className="customers-nav">
            <button className="add-btn" onClick={this.showForm}>
              add
            </button>
            <div className="sort">
              sortby:{" "}
              <select>
                <option>ehlo</option>
                <option>ehlo2</option>
              </select>
            </div>
            <input
              onChange={this.search}
              placeholder="search"
              type="search"
            ></input>
          </div>

          <div className="mans-list">
            <div className="man" onClick={this.showForm}>
              <div className="add-man man-pic">
                <i className="fa fa-plus"></i>
              </div>
              <p>add</p>
            </div>
            {this.state.mans.map((man) => (
              <Man
                searchString={this.state.searchString}
                name={man.firstName}
              ></Man>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default products;
