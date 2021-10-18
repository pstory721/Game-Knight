import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import * as sessionActions from "../../store/session";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton classname="profile" user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
      </>
    );
  }
  let sessionhomebutton;
  if (sessionUser) {

    sessionhomebutton = (
    <>
      <img src={process.env.PUBLIC_URL + "/img/favicon-32x32.png"} ></img>
      <NavLink id='fu' exact to="/home">
        GameKnight
      </NavLink>
      </>
    );
  } else {
    sessionhomebutton = (
      <>
      <img src={process.env.PUBLIC_URL + "/img/favicon-32x32.png"} ></img>
        <NavLink id='fu' exact to="/">
          GameKnight
        </NavLink>

      </>
    );
  }
  let demoButton;
  if (!sessionUser) {
    demoButton = (
      <button
        onClick={() => {
          setCredential("demo@user.io");
          setPassword("password");
          dispatch(sessionActions.login({ credential, password }));
        }}
      >
        DemoUser
      </button>
    );
  } else {
    demoButton = null;
  }
  let signup;
  if(!sessionUser){
    signup=<NavLink id="nav" to="/signup">
    Sign Up
  </NavLink>
  }
  return (
    <div id="navbar">
      <div id="left">
        {sessionhomebutton}
        <div> {isLoaded} </div>
        <div>{sessionLinks}</div>
      </div>

      <div>
        {signup}
        {demoButton}
      </div>
    </div>
  );
}

export default Navigation;
