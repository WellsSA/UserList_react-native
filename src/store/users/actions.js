import { moveFile } from '../../helpers/file';
import { insertUser, listUsers } from '../../helpers/db';

export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SELECT_USER = 'SELECT_USER';
export const LIST_USERS = 'LIST_USERS';

export const addUser = ({ user: { name, phone, imageURI } }) => {
  return async dispatch => {
    try {
      const newPath = await moveFile(imageURI);
      const result = await insertUser(name, phone, newPath);

      console.log(result);
      dispatch({
        type: ADD_USER,
        payload: {
          user: { id: result.insertId, name, phone, imageURI: newPath },
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const listUser = () => {
  return async dispatch => {
    try {
      const result = await listUsers();
      console.log(result);
      dispatch({ type: LIST_USERS, payload: { users: result.rows._array } });
    } catch (err) {
      console.log(err);
      throw err;
    }
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
