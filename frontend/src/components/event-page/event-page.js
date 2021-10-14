import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import { EditDelete2 } from './edit-delete2';
import { GetEvent } from '../../store/event-page';



export function EventPage() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const event = useSelector((state) => state.SingleEvent.events);

  useEffect(() => {
    dispatch((GetEvent(id)));
  }, [dispatch]);

  let userCheck;
  if(sessionUser.id == event?.hostId){
    userCheck = (
      <EditDelete2 id={event?.id}/>
    )
  }



  return (
    <div>
        <div>
          <img alt='event image here'></img>
        </div>

        <div>
          <div className='secondDiv'>
            <div>{`${event?.name}`}</div>
            <p>{`Hosted By:${event?.hostId} at ${event?.venueId} on ${event?.date},${event?.capacity} amount of people are invited.`}</p>
          </div>
          {userCheck}
        </div>
    </div>
  )
}
