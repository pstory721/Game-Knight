import React, { useState,useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';






export function GroupPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const homeGroups = useSelector((state) => state.Home.groups);
  const homeEvents = useSelector((state) => state.Home.events);
  return (
    <main>
      <div>
        <div>
          <p>image placeholder</p>
        </div>

        <div>
          <p> group name </p>
          <div>
            <span>location</span>
            <span>member count</span>
            <span>organized by</span>
          </div>
        </div>
        <div>
          <ul>
            <li>About</li>
            <li>Events</li>
            <li>Members</li>
            <li>Photos</li>
          </ul>
          <div>
            <button>Join</button>
          </div>
        </div>
      </div>
    </main>
  );
}
