import { csrfFetch } from './csrf';
const CREATE_GROUP = 'session/createGroup';

const CreateGroup = (groups) => {
    return {
      type: CREATE_GROUP,
       groups
    };
  };


export const PostGroup = (input) => async (dispatch) => {
  const response = await csrfFetch(`/api/create-group`,{
  method: "POST",
  body: JSON.stringify( input ),
  })
  if (response.ok) {
    const groups = await response.json();
    dispatch(CreateGroup(groups));
  }
};
const initialState = { groups: []}

const sortList = (list) => {
    return list.sort((groupA, groupB) => {
      return groupA.createdAt- groupB.createdAt;
    }).map((group) => group.type);
  };
const CreateGroupReducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
      case CREATE_GROUP:
        const groupList = newState.groups.map(group => newState[group]);
        groupList.push(action.groups);
        newState.groups = sortList(groupList);
        return newState;
        default:
        return state;
    }
  };
export default CreateGroupReducer
