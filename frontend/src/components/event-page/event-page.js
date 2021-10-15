import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import { EditDelete2 } from './edit-delete2';
import { GetEvent, PostARsvp } from '../../store/event-page';



export function EventPage() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const event = useSelector((state) => state.SingleEvent.events);
  const rsvp = useSelector((state) => state.SingleEvent.rsvps);

  useEffect(() => {
    dispatch((GetEvent(id)));
  }, [dispatch]);

  let userCheck;
  if(sessionUser.id == event?.hostId){
    userCheck = (
      <EditDelete2 id={event?.id}/>
    )
  }
  let eventcheck;
  if( !rsvp.some((ele) => ele.eventId === +id)){
    eventcheck =<div>
    <button
      onClick={() => {
        const payload = {
          userId: sessionUser.id,
          eventId: event.id,
        };
        dispatch(PostARsvp(payload));
      }}
    >
     RSVP
    </button>
  </div>
  }


  return (
    <div>
        <div>
          <img src={`${event?.file}`} alt='event image here'></img>
        </div>

        <div>
          <div className='secondDiv'>
            <div>{`${event?.name}`}</div>
            <p>{`Hosted By:${event?.hostId} at ${event?.venueId} on ${event?.date},${event?.capacity} amount of people are invited.`}</p>
          </div>
          {userCheck}
          {eventcheck}
        </div>
    </div>
  )
}
