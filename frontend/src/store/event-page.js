import { csrfFetch } from "./csrf";
const EVENT_FILL = "session/ShowEvent";
const DELETE_EVENT = "session/DeleteEvent";
const UPDATE_EVENT = "session/UpdateEvent";
const RSVP_EVENT = "session/RsvpEvent";
const ShowEvent = (events) => {
  return {
    type: EVENT_FILL,
    events,
  };
};
const DeleteEvent = () => {
  return {
    type: DELETE_EVENT,
  };
};
const UpdateEvent = (events) => {
  return {
    type: UPDATE_EVENT,
    events,
  };
};
const AddRsvp = (rsvps) => {
  return {
    type: RSVP_EVENT,
    rsvps,
  };
};

export const PostARsvp = (input) => async (dispatch) => {
  const response = await csrfFetch(`/api/event-page`, {
    method: "POST",
    body: JSON.stringify(input),
  });
  if (response.ok) {
    const { newrsvp } = await response.json();
    dispatch(AddRsvp(newrsvp));
  }
};

export const GetEvent = (id) => async (dispatch) => {
  const response = await fetch(`/api/event-page/${id}`);
  if (response.ok) {
    const { events } = await response.json();
    dispatch(ShowEvent(events));
  }
};
export const DeleteAEvent = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/event-page/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(DeleteEvent());
  }
};

export const PatchAEvent = (input, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/event-page/${id}`, {
    method: "PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { UpdatedEvent } = await response.json();
    dispatch(UpdateEvent(UpdatedEvent));
  }
};

const initialState = { events: [], rsvps: [] };
const SingleEventReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case EVENT_FILL:
      newState = Object.assign({}, state);
      newState.events = action.events;
      return newState;
    case DELETE_EVENT:
      newState = Object.assign({}, state);
      delete newState[action.events];
      return newState;
    case UPDATE_EVENT:
      newState = Object.assign({}, state);
      newState.events = action.events;
      return newState;
    case RSVP_EVENT:
      newState = Object.assign({}, state);
      newState.rsvps = action.rsvps;
    default:
      return state;
  }
};
export default SingleEventReducer;
