const CREATE_GROUP = 'session/createGroup';

const CreateGroup = (groups) => {
    return {
      type: CREATE_GROUP,
       payload:groups
    };
  };


export const PostGroup = (input) => async (dispatch) => {
  const response = await fetch(`/api/create-group`,{
  method: "POST",
  body: JSON.stringify( input ),
  headers: { "Content-Type": "application/json" },
  })
  if (response.ok) {
    const groups = await response.json();
    dispatch(CreateGroup(groups));
  }
};const initialState = { groups: null}

const sortList = (list) => {
    return list.sort((groupA, groupB) => {
      return groupA.createdAt- groupB.createdAt;
    }).map((group) => group.type);
  };
const CreateGroupReducer = (state = initialState, action) => {
    let newState;
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
