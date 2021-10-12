const GROUP_FILL = 'session/ShowGroup';

const ShowGroup = (group1,events) => {
    return {
      type: GROUP_FILL,
       group1,
       events
    };
  };


export const GetGroup = (id) => async (dispatch) => {
  const response = await fetch(`/api/group-page/${id}`);
  console.log(id)
  if (response.ok) {
    const {group1, events} = await response.json();
    dispatch(ShowGroup(group1,events));
  }
};const initialState = { group1: null,events:null };
const SingleGroupReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case GROUP_FILL:
        newState = Object.assign({}, state);
        newState.group1 = action.group1
        newState.events = action.events
        return newState
        default:
        return state;
    }
  };
export default SingleGroupReducer
