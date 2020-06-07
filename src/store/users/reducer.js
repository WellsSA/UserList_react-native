import {
  ADD_USER,
  EDIT_USER,
  REMOVE_USER,
  SELECT_USER,
  LIST_USERS,
} from './actions';

const initialState = {
  selectedUser: undefined,
  users: [],
};
const keyGen = key => {
  if (!key) return 10;
  return 10 + (key * 2 - 2);
};

export default (state = initialState, action) => {
  console.log({ action, state });
  switch (action.type) {
    case ADD_USER: {
      const key = String(keyGen(action.payload.user.id));
      return {
        ...state,
        users: state.users.concat({
          key,
          value: { ...action.payload.user },
        }),
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        users: state.users.filter(_user => _user.key !== action.payload.key),
      };
    }
    case SELECT_USER: {
      return {
        ...state,
        selectedUser: action.payload.user,
      };
    }
    case EDIT_USER: {
      if (!action.payload.user) return;

      const { user } = action.payload;
      const index = state.users.findIndex(_user => _user.key === user.key);
      const _users = [...state.users];
      _users[index] = user;

      return {
        ...state,
        users: _users,
      };
    }
    case LIST_USERS: {
      return {
        ...state,
        users: action.payload.users.map(_user => ({
          key: String(keyGen(_user.id)),
          value: { ..._user },
        })),
      };
    }
    default:
      return state;
  }
};
