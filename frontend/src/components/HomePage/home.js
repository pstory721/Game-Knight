import React, {  useEffect } from "react";
import { GetStuff } from "../../store/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css";

export function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const homeGroups = useSelector((state) => state.Home.groups);
  const homeEvents = useSelector((state) => state.Home.events);
  const homeRsvps = useSelector((state) => state.Home.rsvps);
  const userGroups = useSelector((state) => state.Home.userGroups);
  useEffect(() => {
    dispatch(GetStuff());
  }, [dispatch]);

  return (
    <div>
      <div>
        <header className="secondDiv">
          <h1 id="header">Welcome to GameKnight,{sessionUser?.username}</h1>
        </header>
        <main className="mainhome">
          <div className="middle">
            <div>
              <h2>Attend a game starting soon</h2>
              <div>
                {homeEvents?.map((event) => (
                  <div>
                    <Link
                      className="links"
                      to={`event-page/${event?.id}`}
                      key={`${event?.id}`}
                    >
                      {event?.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="middle">
            <div>
              <h2>Your Groups</h2>
              <div>
                {userGroups?.map((group) => (
                  <div>
                    <Link
                      className="links"
                      to={`/group-page/${group?.id}`}
                      key={`${group?.id}`}
                    >
                      {group?.group?.type}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2>Your Rsvps</h2>
              <div>
                {homeRsvps?.map((rsvp) => (
                  <div>
                    <Link
                      className="links"
                      to={`/event-page/${rsvp?.eventId}`}
                      key={`${rsvp?.id}`}
                    >
                      {rsvp?.event?.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="middle">
            <h3> Here are some popular groups you may like!</h3>
            {homeGroups?.map((group) => (
              <div>
                <Link
                  className="links"
                  to={`/group-page/${group?.id}`}
                  key={`${group?.id}`}
                >
                  {group?.type}
                </Link>
              </div>
            ))}
          </div>
        </main>
        <div className="creatediv">
          <div className="create">
            <Link className="create" to="/create-group">
              Start a Group
            </Link>
            <p className="homeptag">
              Start a group for whatever tabletop game you want,be it monopoly
              to D&D
            </p>
          </div>
          <div className="create">
            <Link className="create" to="/create-event">
              Add an event to existing groups
            </Link>
            <p className="homeptag">
              Create an Event for that big day of 40K fun, or just to hangout
              with people of like intrests, the powers in your hands
            </p>
          </div>
          <div className="create">
            <Link className="create" to="/create-venue">
              How do we know where the funs at without a venue? Create one here
            </Link>
            <p className="homeptag">
              Let us know where to bring the snacks with the creation of your
              very own venue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
