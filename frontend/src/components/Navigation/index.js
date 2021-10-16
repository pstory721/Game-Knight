import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch, } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }
  let sessionhomebutton
  if (sessionUser) {
    sessionhomebutton = (
      <NavLink exact to="/home">GameKnight</NavLink>
    );
  } else {
    sessionhomebutton = (
      <>
          <NavLink exact to="/">GameKnight</NavLink>
      </>
    );
  }

  return (
<div id ='navbar'>
    <ul>
      <li>
        {sessionhomebutton}
        {isLoaded && sessionLinks}
      </li>
    </ul>
      <button onClick= {() =>{
        setCredential('demo@user.io')
        setPassword('password')
        dispatch(sessionActions.login({credential,password })) }}>
        DemoUser
      </button>

</div>
  );
}

export default Navigation;
