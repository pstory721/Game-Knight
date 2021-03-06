const BUNCHES_STUFF = 'session/ShowStuff';

const ShowStuff = (Stuff) => {
    return {
      type: BUNCHES_STUFF,
       payload:Stuff
    };
  };


export const GetStuff = () => async (dispatch) => {
  const response = await fetch(`/api/home`);

  if (response.ok) {
    const Stuff = await response.json();
    dispatch(ShowStuff(Stuff));
  }
};const initialState = { groups: [],events:[],venues:[],userGroups:[],rsvps:[] };
const HomeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case BUNCHES_STUFF:
        newState = Object.assign({}, state);
        newState.groups = action.payload.groups
        newState.events = action.payload.events
        newState.venues = action.payload.venues
        newState.rsvps = action.payload.rsvps
        newState.userGroups = action.payload.userGroups
        return newState
        default:
        return state;
    }
  };
export default HomeReducer
