import React, { Component } from "react";
import ListComponent from "./listComponent";

class sideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <div className="profile">
          <div className="profile-pic">
            <img src="./download.png.jpg" alt=" "></img>
          </div>
          <h1>Jane Doe</h1>
        </div>

        <ul>
          <ListComponent
            index={this.props.index}
            mainState={this.props.mainState}
            changeMain={this.props.changeMain}
          ></ListComponent>
        </ul>
      </div>
    );
  }
}

export default sideNav;
