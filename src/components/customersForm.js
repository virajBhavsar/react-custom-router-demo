import React, { Component } from "react";
import "../static/customersForm.css";

class customersForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    streetSociety: "",
    cityVillage: "",
    district: "",
    State: "",
    PhoneNo: "",
  };
  addCustomers = () => {
    this.props.addCustomers(
      this.state.firstName,
      this.state.lastName,
      this.state.streetSociety,
      this.state.cityVillage,
      this.state.district,
      this.state.state,
      this.state.PhoneNo
    );
    this.props.showForm();
  };

  handleFNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleLNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handleSSChange = (e) => {
    this.setState({ streetSociety: e.target.value });
  };
  handleCVChange = (e) => {
    this.setState({ cityVillage: e.target.value });
  };
  handleDistChange = (e) => {
    this.setState({ district: e.target.value });
  };
  handleStateChange = (e) => {
    this.setState({ State: e.target.value });
  };
  handlePhoneNoChange = (e) => {
    this.setState({ PhoneNo: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="customers-form">
          <button
            className="back-to-customers-btn"
            onClick={this.props.showForm}
          >
            <i className="fa fa-arrow-left"></i>
          </button>{" "}
          <div className="parameter-names">
            <h4>first name :</h4>
            <h4> last name : </h4>
            <h4> street/society :</h4>
            <h4> city/village : </h4>
            <h4> district : </h4>
            <h4> state : </h4>
            <h4> phone : </h4>
          </div>
          <div className="form-fields">
            <input
              onChange={this.handleFNameChange}
              placeholder="firstName"
              name="firstName"
              type="text"
            ></input>

            <input
              onChange={this.handleLNameChange}
              placeholder="lastname"
              name="lastName"
              type="text"
            ></input>

            <input
              onChange={this.handleSSChange}
              placeholder="streetSociety"
              name="streetSociety"
              type="text"
            ></input>

            <input
              onChange={this.handleCVChange}
              placeholder="cityVillage"
              name="cityVillage"
              type="text"
            ></input>

            <input
              onChange={this.handleDistChange}
              placeholder="district"
              name="district"
              type="text"
            ></input>

            <input
              onChange={this.handleStateChange}
              placeholder="state"
              name="state"
              type="text"
            ></input>

            <input
              onChange={this.handlePhoneNoChange}
              placeholder="phoneNo"
              name="phoneNo"
              type="number"
            ></input>
            <div className="form-btns">
              <input
                className="submit-btn"
                type="submit"
                onClick={this.addCustomers}
              ></input>
              <button className="make-bill">make bill</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default customersForm;
