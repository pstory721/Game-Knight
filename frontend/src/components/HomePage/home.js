import React, { useState,useEffect } from 'react';
import { GetStuff } from '../../store/home';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';

export function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const homeGroups = useSelector((state) => state.Home.groups);
  const homeEvents = useSelector((state) => state.Home.events);
  useEffect(() => {
    dispatch((GetStuff()));
  }, [dispatch,homeGroups]);

  return (
    <div id='openingDiv'>
      <div>
        <header className='secondDiv'>
          <h3>Welcome to GameKnight,{sessionUser.username}</h3>
        </header>
        <main>
          <div className='secondDiv'>
            <h4>Find a game</h4>
            <p>Games are always happening find one ya like</p>
            <a>Discover Games</a>
          </div>
          <div className='secondDiv'>
            <h4>Join a group</h4>
            <p>Find people who like the same games as you</p>
            <h3> Here are some popular groups you may like!</h3>
            {homeGroups?.map(group => <div>
              <Link to ={`/group-page/${group.id}`} key={`${group.id}`}>{group.type}</Link>
            </div>)}
          </div>
        </main>
        <div className='secondDiv'>
          <h2>Attend a game starting soon</h2>
          <div>
            {homeEvents?.map(event => <div>
              <Link to={`event-page/${event.id}`}key={`${event.id}`}>{event.name}</Link>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
