import React, { Component } from "react";
import "../static/home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="home-customers">
            <h1>customers</h1>
            <ul>
              <li>add</li>
              <li>remove</li>
              <li>view</li>
            </ul>
          </div>

          <div className="home-party">
            <h1>party</h1>
            <ul>
              <li>add</li>
              <li>remove</li>
              <li>view</li>
            </ul>
          </div>

          <div className="home-products">
            <h1>products</h1>
            <ul>
              <li>last opened</li>
              <li>frequent</li>
              <li>catagory</li>
            </ul>
          </div>

          <div className="home-bills">
            <h1>bills</h1>
            <ul>
              <li>recent</li>
              <li>debit</li>
              <li>credit</li>
            </ul>
          </div>
          <div className="home-accounts">
            <h1>accounts</h1>
            <ul>
              <li>add</li>
              <li>remove</li>
              <li>change</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
