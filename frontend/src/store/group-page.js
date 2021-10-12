import { csrfFetch } from './csrf';
const GROUP_FILL = 'session/ShowGroup';
const DELETE_GROUP = 'session/ShowGroup'
const UPDATE_GROUP = 'session/ShowGroup';

const ShowGroup = (group1,events) => {
    return {
      type: GROUP_FILL,
       group1,
       events
    };
  };
  const DeleteGroup = () => {
    return {
      type: DELETE_GROUP,
    };
  };
  const UpdateGroup = (group1) => {
    return {
      type:UPDATE_GROUP,
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
  const response = await csrfFetch(`/api/group-page/${id}`,{
    method:"DELETE"
  });
  if (response.ok) {
    dispatch(DeleteGroup());
  }
}

export const PatchAGroup = (input,id) => async dispatch => {
  const response = await csrfFetch(`/api/group-page/${id}`,{
  method: "PUT",
  body: JSON.stringify( input ),
  headers: { "Content-Type": "application/json" },
  })
  if (response.ok) {
    const editedGroup = await response.json();
    dispatch(UpdateGroup(editedGroup));
    return true
  }
};

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
          case UPDATE_GROUP:

        default:
        return state;
    }
  };
export default SingleGroupReducer
