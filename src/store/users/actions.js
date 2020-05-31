export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SELECT_USER = 'SELECT_USER';

export const addUser = ({ user }) => {
  return {
    type: ADD_USER,
    payload: { user },
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

export const editUser = ({ user }) => {
  return {
    type: EDIT_USER,
    payload: { user },
  };
};
