import React, { useState, useEffect } from "react";
import { GetStuff } from "../../store/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css";

export function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const homeGroups = useSelector((state) => state.Home.groups);
  const homeEvents = useSelector((state) => state.Home.events);
  const userGroups = useSelector((state) => state.Home.userGroups);
  useEffect(() => {
    dispatch(GetStuff());
  }, [dispatch]);

  return (
    <div>
      <div>
        <header className="secondDiv">
          <h1 id="header">
            Welcome to GameKnight,{sessionUser?.username}
          </h1>
        </header>
        <main className="mainhome">
          <div className="secondDiv">
            <h4>Find a game</h4>
            <p className="homeptag">
              Games are always happening find one ya like
            </p>
            <div>
              <h2>Attend a game starting soon</h2>
              <div>
                {homeEvents?.map((event) => (
                  <div>
                    <Link className='links' to={`event-page/${event?.id}`} key={`${event?.id}`}>
                      {event?.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="secondDiv">
            <h4>Your games and events</h4>
            <p className="homeptag">
            </p>
            <div>
              <h2>your groups</h2>
              <div>
                {userGroups?.map((group) => (
                  <div>
                    <Link className='links' to={`/group-page/${group?.id}`} key={`${group?.id}`}>
                      {group?.group?.type}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="secondDiv">
            <h4>Join a group</h4>
            <p className="homeptag">
              Find people who like the same games as you
            </p>
            <h3> Here are some popular groups you may like!</h3>
            {homeGroups?.map((group) => (
              <div>
                <Link className='links' to={`/group-page/${group?.id}`} key={`${group?.id}`}>
                  {group?.type}
                </Link>
              </div>
            ))}
          </div>
        </main>
      <div className='creatediv'>
        <div className='create'>
          <Link className='create' to="/create-group">Start a Group</Link>
          <p className="homeptag">Make "friends"</p>
        </div>
        <div div className='create'>
          <Link className='create' to="/create-event">Add an event to existing groups</Link>
          <p className="homeptag">Make "friends"</p>
        </div>
        <div div className='create'>
          <Link className='create' to="/create-venue">
            How do we know where the funs at without a venue? Create one here
          </Link>
          <p className="homeptag">Make "friends"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
