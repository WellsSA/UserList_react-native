import { ADD_USER, EDIT_USER, REMOVE_USER, SELECT_USER } from './actions';

const initialState = {
  selectedUser: undefined,
  users: [
    {
      key: '100',
      value: { name: 'teste', phone: '1199997777' },
    },
  ],
};
const keyGen = key => {
  if (!key) return 10;
  return 10 + (key * 2 - 2);
};

export default (state = initialState, action) => {
  console.log({ action, state });
  switch (action.type) {
    case ADD_USER: {
      const { name, phone } = action.payload;
      const key = String(keyGen(state.users.length + 1));
      return {
        ...state,
        users: state.users.concat({
          key,
          value: { name, phone },
        }),
      };
    }
    case REMOVE_USER: {
      return {
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
    default:
      return state;
  }
};
