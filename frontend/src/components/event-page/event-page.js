import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EditDelete2 } from "./edit-delete2";
import { GetEvent, PostARsvp } from "../../store/event-page";
import "./event-page.css";

export function EventPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const event = useSelector((state) => state.SingleEvent.events);
  const rsvp = useSelector((state) => state.SingleEvent.rsvps);

  useEffect(() => {
    dispatch(GetEvent(id));
  }, [dispatch]);

  let userCheck;
  if (sessionUser.id == event?.hostId) {
    userCheck = <EditDelete2 id={event?.id} />;
  }
  let eventcheck;
  if (!rsvp.some((ele) => ele.eventId === +id)) {
    eventcheck = (
      <div>
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
    );
  }

  return (
    <div className="secondDiv">
      <div>
        <img src={`${event?.file}`} alt="event"></img>
      </div>

      <div>
        <div className="secondDiv">
          <h1>{`${event?.name}`}</h1>
          <h2>{` ${new Date(event?.date).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
          })},${event?.capacity} rsvps are availible.`}</h2>
        </div>
        {userCheck}
        {eventcheck}
      </div>
    </div>
  );
}
