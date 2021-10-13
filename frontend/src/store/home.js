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
};const initialState = { groups: [],events:[],venues:[] };
const HomeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case BUNCHES_STUFF:
        newState = Object.assign({}, state);
        newState.groups = action.payload.groups
        newState.events = action.payload.events
        newState.events = action.payload.venues
        return newState
        default:
        return state;
    }
  };
export default HomeReducer
