import { moveFile } from '../../helpers/file';
import {
  insertUser,
  listUsers,
  editUser as editUserSQL,
  deleteUser,
} from '../../helpers/db';

export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SELECT_USER = 'SELECT_USER';
export const LIST_USERS = 'LIST_USERS';

export const addUser = ({ user: { name, phone, imageURI, location } }) => {
  return async dispatch => {
    try {
      const newPath = await moveFile(imageURI);
      const result = await insertUser(
        name,
        phone,
        newPath,
        new Date().toISOString(),
        location.coords.latitude,
        location.coords.longitude
      );

      dispatch({
        type: ADD_USER,
        payload: {
          user: { id: result.insertId, name, phone, imageURI: newPath },
        },
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
};

export const listUser = () => {
  return async dispatch => {
    try {
      const result = await listUsers();
      dispatch({ type: LIST_USERS, payload: { users: result } });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
};

export const removeUser = ({ user }) => {
  return async dispatch => {
    try {
      const result = await deleteUser(user.value.id);
      dispatch({ type: REMOVE_USER, payload: { key: user.key } });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
};

export const selectUser = ({ user }) => {
  return {
    type: SELECT_USER,
    payload: { user },
  };
};

export const editUser = ({
  user: {
    key,
    value: { id, name, phone, imageURI, location },
  },
}) => {
  return async dispatch => {
    try {
      const newPath = await moveFile(imageURI);
      const result = await editUserSQL(
        id,
        name,
        phone,
        newPath,
        new Date().toISOString(),
        location.coords.latitude,
        location.coords.longitude
      );

      dispatch({
        type: EDIT_USER,
        payload: {
          user: {
            key,
            value: { id, name, phone, imageURI: newPath },
          },
        },
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
};
