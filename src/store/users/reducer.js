import { ADD_USER, REMOVE_USER, SELECT_USER } from './actions';

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
  switch (action.type) {
    case ADD_USER: {
      const { name, phone } = action.payload;
      const key = String(keyGen(state.users.length + 1));
      return {
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
        selectedUser: action.payload.user,
      };
    }
    default:
      return state;
  }
};
