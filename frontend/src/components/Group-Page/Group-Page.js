import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetGroup } from '../../store/group-page';
import { useParams,Link } from 'react-router-dom';
import { EditDelete } from './Edit-Delete';
import './group-page.css'




export function GroupPage() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const group = useSelector((state) => state.SingleGroup.group1);
  const groupEvents = useSelector((state) => state.SingleGroup.events);
  console.log(sessionUser)
  useEffect(() => {
    dispatch((GetGroup(id)));
  }, [dispatch]);

  let userCheck;
  if(sessionUser.id === group?.ownerId){
    userCheck = (
      <EditDelete id={group?.id}/>
    )
  }



  return (
    <main>
      <div className='secondDiv'>
        <div>
          <img src={`${group?.file}`} alt='Group Image Here'></img>
        </div>

        <div>
          <div className='secondDiv'>
            <div>{`${group?.type}`}</div>
            <div>{`${group?.description}`}</div>
          </div>
          {userCheck}
        </div>
        <div className='secondDiv'>
          <ul>
          {groupEvents?.map(event => <div>
              <Link to={`event-page/${event.id}`}key={`${event.id}`}>{event.name}</Link>
              </div>)}
              <li>Group pictures</li>
              <li>group members</li>
          </ul>
          <div>
            <button>Join</button>
          </div>
        </div>
      </div>
    </main>
  );
}
