const GROUP_FILL = 'session/ShowGroup';
const DELETE_GROUP = 'session/ShowGroup'

const ShowGroup = (group1,events) => {
    return {
      type: GROUP_FILL,
       group1,
       events
    };
  };
  const DeleteGroup = (group1) => {
    return {
      type: DELETE_GROUP,
        group1
    };
  };


export const GetGroup = (id) => async (dispatch) => {
  const response = await fetch(`/api/group-page/${id}`);
  if (response.ok) {
    const {group1, events} = await response.json();
    dispatch(ShowGroup(group1,events));
  }
};
export const DeleteAGroup = (id) => async (dispatch) => {
  const response = await fetch(`/api/group-page/${id}`);
  if (response.ok) {
    const group1 = await response.json();
    dispatch(DeleteGroup(group1));
  }
}
const initialState = { group1: [],events:[] };
const SingleGroupReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case GROUP_FILL:
        newState = Object.assign({}, state);
        newState.group1 = action.group1
        newState.events = action.events
        return newState
        case DELETE_GROUP:
          delete newState[action.group1]
        default:
        return state;
    }
  };
export default SingleGroupReducer
