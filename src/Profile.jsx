import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./profile.css";

class UnconnectedProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  usernameOnChange = event => {
    this.setState({ username: event.target.value });
  };
  editProfileSubmit = async () => {
    let data = new FormData();

    data.append("username", this.state.username);
    data.append("email", this.props.loggedIn);
    let response = await fetch("/editUser", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (!body.success) {
      alert("Your information wasn't saved, try again to update your profile");
    }
    {
      this.props.dispatch({ type: "edit-profile", toggleEditProfile: false });
    }
  };
  editProfileClick = () => {
    this.props.dispatch({ type: "edit-profile", toggleEditProfile: true });
  };
  loggedOut = () => {
    if (this.props.loggedIn === "") {
      return (
        <div>
          <span>You must be signed in to access your profile page.</span>
          <Link to="/login">Sign in here.</Link>
        </div>
      );
    }
  };
  render = () => {
    if (!this.props.toggleEditProfile) {
      return (
        <div>
          <h3> {this.props.user.username}</h3>
          <div> {this.props.user.who}</div>
          <div>{this.props.user.country}</div>
          <button onClick={this.editProfileClick}>Edit</button>
        </div>
      );
    }
    if (this.props.toggleEditProfile) {
      return (
        <div>
          <form onSubmit={this.editProfileSubmit}>
            <div>
              {this.props.user.username}, change your username:
              <div>
                <input
                  type="text"
                  placeholder="New Username"
                  value={this.state.username}
                  onChange={this.usernameOnChange}
                />
              </div>
            </div>
            <div>
              Change your password:
              <div>
                <input type="password" placeholder="New Password" />
              </div>
            </div>
            <div>
              Change your photo
              <div>
                <input type="file" />
              </div>
            </div>

            <div>
              <input type="submit" value="Update" />
            </div>
          </form>
        </div>
      );
    }
  };
}

let mapStateToProps = state => {
  return {
    login: state.login,
    loggedIn: state.loggedIn,
    users: state.users,
    toggleEditProfile: state.toggleEditProfile
  };
};

let Profile = connect(mapStateToProps)(UnconnectedProfile);

export default Profile;
