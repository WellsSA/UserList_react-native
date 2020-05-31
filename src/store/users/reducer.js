import { ADD_USER } from './actions';

const initialState = {
  users: [
    {
      key: '100',
      value: { name: 'teste', phone: '1199997777' },
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const { key, name, phone } = action.payload;

      return {
        users: state.users.concat({
          key,
          value: { name, phone },
        }),
      };
    default:
      return state;
  }
};
