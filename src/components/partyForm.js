import React, { Component } from "react";
import "../static/customersForm.css";

class partyForm extends Component {
  state = {
    companyName: "",
    dealername: "",
    email: "",
    cityVillage: "",
    district: "",
    GSTNo: "",
    PhoneNo: "",
  };
  addParty = () => {
    this.props.addparty(
      this.state.companyName,
      this.state.dealername,
      this.state.email,
      this.state.cityVillage,
      this.state.district,
      this.state.GSTNo,
      this.state.PhoneNo
    );
    this.props.showForm();
  };

  handleCNameChange = (e) => {
    this.setState({ companyName: e.target.value });
  };
  handleDNameChange = (e) => {
    this.setState({ dealername: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleCVChange = (e) => {
    this.setState({ cityVillage: e.target.value });
  };
  handleDistChange = (e) => {
    this.setState({ district: e.target.value });
  };
  handleGSTNoChange = (e) => {
    this.setState({ GSTNo: e.target.value });
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
            <h4> company name :</h4>
            <h4> dealer name : </h4>
            <h4> email :</h4>
            <h4> city/village : </h4>
            <h4> district : </h4>
            <h4> gst No. : </h4>
            <h4> phone : </h4>
          </div>
          <div className="form-fields">
            <input
              onChange={this.handleCNameChange}
              placeholder="companyName"
              type="text"
            ></input>

            <input
              onChange={this.handleDNameChange}
              placeholder="dealer name"
              type="text"
            ></input>

            <input
              onChange={this.handleEmailChange}
              placeholder="Email address"
              type="email"
            ></input>

            <input
              onChange={this.handleCVChange}
              placeholder="cityVillage"
              type="text"
            ></input>

            <input
              onChange={this.handleDistChange}
              placeholder="district"
              type="text"
            ></input>

            <input
              onChange={this.handleGSTNoChange}
              placeholder="gst No"
              type="text"
            ></input>

            <input
              onChange={this.handlePhoneNoChange}
              placeholder="phoneNo"
              type="number"
            ></input>

            <div className="form-btns">
              <input
                className="submit-btn"
                type="submit"
                onClick={this.addParty}
              ></input>
              <button className="make-bill">make bill</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default partyForm;
