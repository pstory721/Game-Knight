import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetGroup } from '../../store/group-page';
import { useParams } from 'react-router-dom';






export function GroupPage() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const group = useSelector((state) => state. SingleGroup.group);
  const groupEvents = useSelector((state) => state. SingleGroup.events);
  useEffect(() => {
    dispatch((GetGroup(id)));
  }, [dispatch]);
  return (
    <main>
      <div>
        <div>
          <img src={`${group?.file}`} alt='Group Image Here'></img>
        </div>

        <div>
          <p> {`${group?.type}`} </p>
          <div>
            <div>{`${group?.type}`}</div>
            <div>{`${group?.description}`}</div>
          </div>
        </div>
        <div>
          <ul>
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
