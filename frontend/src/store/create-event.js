import { csrfFetch } from './csrf';
const CREATE_EVENT = 'session/createEvent';

const CreateEvent = (events,venues,groups) => {
    return {
      type: CREATE_EVENT ,
       events,
       venues,
       groups
    };
  };


export const PostEvent = (input) => async (dispatch) => {
  const response = await csrfFetch(`/api/create-event`,{
  method: "POST",
  body: JSON.stringify( input ),
  })
  if (response.ok) {
    const {events,venues,groups} = await response.json();
    dispatch(CreateEvent(events,venues,groups));
  }
};
const initialState = { events: [],venues:[],groups:[]}

const sortList = (list) => {
    return list.sort((eventA, eventB) => {
      return eventA.createdAt- eventB.createdAt;
    }).map((event) => event.name);
  };
const CreateEventReducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
      case CREATE_EVENT :
        const eventList = newState.events.map(event => newState[event]);
        eventList.push(action.events);
        newState.events = sortList(eventList);
        return newState;

        default:
        return state;
    }
  };
export default CreateEventReducer
