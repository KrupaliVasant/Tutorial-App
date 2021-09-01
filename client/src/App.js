import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import AddTutorial from "./components/addtutorial";
import Profile from "./components/profile.component";
import Viewmore from "./components/viewmore.component";

// import AuthVerify from "./common/auth-verify";

import EditTutorial from "./components/edittutorial";

function App() {
  // constructor(props) {
  //   super(props);
  //   this.logOut = this.logOut.bind(this);

  //   this.state = {
  //     showModeratorBoard: false,
  //     showAdminBoard: false,
  //     currentUser: undefined,
  //   };
  // }

  // componentDidMount() {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     this.setState({
  //       currentUser: user,
  //       showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
  //       showAdminBoard: user.roles.includes("ROLE_ADMIN"),
  //     });
  //   }

  //   EventBus.on("logout", () => {
  //     this.logOut();
  //   });
  // }

  // componentWillUnmount() {
  //   EventBus.remove("logout");
  // }

  // logOut() {
  //   AuthService.logout();
  //   this.setState({
  //     showModeratorBoard: false,
  //     showAdminBoard: false,
  //     currentUser: undefined,
  //   });
  // }

  // render() {
  //   const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Brillio
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addtutorial"} className="nav-link">
              Add Tutorial
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/edittutorial"} className="nav-link">
              Edit Tutorial
            </Link>
          </li>

          {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
        </div>

        {/* {currentUser ? ( */}
        {/* <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div> */}
        {/* ) : ( */}
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
        {/* )} */}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/addtutorial" component={AddTutorial}></Route>
          <Route
            exact
            path="/edittutorial/:id"
            component={EditTutorial}
          ></Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/viewmore/:id" component={Viewmore} />
        </Switch>
      </div>

      {/*<AuthVerify logOut={this.logOut}/> */}
    </div>
  );
}

export default App;
