export const ADD_USER = 'ADD_USER';

export const addUser = (key, name, phone) => {
  return {
    type: ADD_USER,
    payload: { key, name, phone },
  };
};
