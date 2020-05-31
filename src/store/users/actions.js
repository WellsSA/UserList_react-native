export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SELECT_USER = 'SELECT_USER';

export const addUser = ({ name, phone }) => {
  return {
    type: ADD_USER,
    payload: { name, phone },
  };
};

export const removeUser = ({ key }) => {
  return {
    type: REMOVE_USER,
    payload: { key },
  };
};

export const selectUser = ({ user }) => {
  return {
    type: SELECT_USER,
    payload: { user },
  };
};
