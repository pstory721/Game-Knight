import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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

  return (
<div>
    <ul>
      <li>
        <NavLink exact to="/">GameKnight</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    <form>
      <input placeholder="Search"></input>
      <button>Search</button>
      {isLoaded}
      </form>
</div>
  );
}

export default Navigation;
