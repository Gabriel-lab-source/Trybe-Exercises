const INITIAL_STATE = {
  userName: '',
};

type ActionType = {
  type: string;
  payload: string;
};

function userReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case 'SAVE_USER':
      return { userName: action.payload };
    default:
      return state;
  }
}

export default userReducer;
