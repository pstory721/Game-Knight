import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleGroupReducer from '../../store/group-page';






export function GroupPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const Group = useSelector((state) => state. SingleGroup.group);
  const groupEvents = useSelector((state) => state. SingleGroup.events);
  useEffect(() => {
    dispatch((SingleGroupReducer()));
  }, [dispatch]);
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
