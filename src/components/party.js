import React, { Component } from "react";
import "../static/party.css";
import Man from "./man";
import PartyForm from "./partyForm";

class party extends Component {
  state = {
    form: false,
    index: 0,
    searchString: "",
    mans: [],
  };

  addparty = (cname, dealername, email, cv, dist, GSTNo, phoneNo) => {
    this.setState({
      mans: [
        ...this.state.mans,
        {
          companyName: cname,
          dealername: dealername,
          email: email,
          cityVillage: cv,
          district: dist,
          GSTNo: GSTNo,
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
        <PartyForm
          addparty={this.addparty}
          showForm={this.showForm}
        ></PartyForm>
      );
    } else {
      return (
        <div className="party">
          <div className="party-nav">
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
                name={man.companyName}
              ></Man>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default party;
