import { csrfFetch } from './csrf';
const CREATE_VENUE = 'session/createVenue';

const CreateVenue = (venues) => {
    return {
      type: CREATE_VENUE,
       venues
    };
  };


export const PostVenue = (input) => async (dispatch) => {
  const response = await csrfFetch(`/api/create-venue`,{
  method: "POST",
  body: JSON.stringify( input ),
  })
  if (response.ok) {
    const venues = await response.json();
    dispatch(CreateVenue(venues));
  }
};
const initialState = { venues:[]}

const sortList = (list) => {
    return list.sort((venueA, venueB) => {
      return venueA.name - venueB.name;
    }).map((venue) => venue.type);
  };
const CreateVenueReducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
      case CREATE_VENUE:
        const venueList = newState.venues.map(venue => newState[venue]);
        venueList.push(action.venues);
        newState.venues = sortList(venueList);
        return newState;

        default:
        return state;
    }
  };
export default CreateVenueReducer
