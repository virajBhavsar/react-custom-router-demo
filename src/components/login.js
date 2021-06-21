import React, { Component } from "react";
import "../static/login.css";

class login extends Component {
  render() {
    return (
      <React.Fragment>
        <form method="post" className="loginForm">
          <h1>login</h1>
          <div class="input-box">
            <input type="text" autocomplete="off" name="name" required />
            <label for="name" class="label">
              <span class="span">name</span>
            </label>
          </div>
          <div class="input-box">
            <input
              type="password"
              autocomplete="off"
              name="password"
              required
            />
            <label for="password" class="label">
              <span class="span">password</span>
            </label>
          </div>
          <input
            id="submit"
            type="submit"
            onClick={this.props.handleToogleLogin}
          ></input>
        </form>
      </React.Fragment>
    );
  }
}

export default login;
