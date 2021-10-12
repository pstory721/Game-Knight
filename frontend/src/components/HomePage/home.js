import React, { useState,useEffect } from 'react';
import { GetStuff } from '../../store/home';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const homeGroups = useSelector((state) => state.Home.groups);
  const homeEvents = useSelector((state) => state.Home.events);
  useEffect(() => {
    dispatch((GetStuff()));
  }, [dispatch]);

  return (
    <div>
      <div>
        <div>
          <h2>meetup</h2>
          <input type="text"></input>
          <input type="text"></input>
          <button>search</button>
          <button>Profile</button>
        </div>

        <header>
          <h3>Welcome to GameKnight,{sessionUser.username}</h3>
        </header>
        <main>
          <div>
            <h4>Find a game</h4>
            <p>Games are always happening find one ya like</p>
            <a>Discover Games</a>
          </div>
          <div>
            <h4>Join a group</h4>
            <p>Find people who like the same games as you</p>
            <h3> Here are some popular groups you may like!</h3>
            {homeGroups?.map(group => <div>
              <Link to ={`/group-${group.id}`}>{group.type}</Link>
            </div>)}
          </div>
        </main>
        <div>
          <h2>Attend a game starting soon</h2>
          <div>
            {homeEvents?.map(event => <div>
              <Link to={`event-${event.id}`}>{event.name}</Link>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
