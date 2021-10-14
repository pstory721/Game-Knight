import { csrfFetch } from "./csrf";
const GROUP_FILL = "session/ShowGroup";
const DELETE_GROUP = "session/ShowGroup";
const UPDATE_GROUP = "session/ShowGroup";
const ADD_USERGROUP = "session/ShowGroup";
const ShowGroup = (group1, events) => {
  return {
    type: GROUP_FILL,
    group1,
    events,
  };
};
const DeleteGroup = () => {
  return {
    type: DELETE_GROUP,
  };
};
const UpdateGroup = (group1) => {
  return {
    type: UPDATE_GROUP,
    group1,
  };
};
const AdduserGroup = (userGroup) => {
  return {
    type: ADD_USERGROUP,
    userGroup,
  };
};

export const AddUserGroup = (input) => async (dispatch) => {
  const response = await csrfFetch(`/api/group-page`, {
    method: "POST",
    body: JSON.stringify(input),
  });
  if (response.ok) {
    const { userGroup } = await response.json();
    dispatch(AdduserGroup(userGroup));
  }
};

export const GetGroup = (id) => async (dispatch) => {
  const response = await fetch(`/api/group-page/${id}`);
  if (response.ok) {
    const { group1, events } = await response.json();
    dispatch(ShowGroup(group1, events));
  }
};
export const DeleteAGroup = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/group-page/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(DeleteGroup());
  }
};

export const PatchAGroup = (input, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/group-page/${id}`, {
    method: "PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { UpdatedGroup } = await response.json();
    dispatch(UpdateGroup(UpdatedGroup));
  }
};

const initialState = { group1: [], events: [], userGroup: [] };
const SingleGroupReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GROUP_FILL:
      newState = Object.assign({}, state);
      newState.group1 = action.group1;
      newState.events = action.events;
      return newState;
    case DELETE_GROUP:
      delete newState[action.group1];
      return newState;
    case UPDATE_GROUP:
      newState.group1 = action.group1;
      return newState;
    case ADD_USERGROUP:
      newState.group1 = action.group1;
      newState.events = action.events;
      newState.userGroup = action.userGroup;
    default:
      return state;
  }
};
export default SingleGroupReducer;
