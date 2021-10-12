const GROUP_FILL = 'session/ShowStuff';

const ShowGroup = (group) => {
    return {
      type: GROUP_FILL,
       group
    };
  };


export const GetGroup = () => async (dispatch) => {
  const response = await fetch(`/api/group-page`);

  if (response.ok) {
    const group = await response.json();
    dispatch(ShowGroup(group));
  }
};const initialState = { group: null,events:null };
const SingleGroupReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case GROUP_FILL:
        newState = Object.assign({}, state);
        newState.group = action.payload.group
        newState.events = action.payload.events
        return newState
        default:
        return state;
    }
  };
export default SingleGroupReducer
