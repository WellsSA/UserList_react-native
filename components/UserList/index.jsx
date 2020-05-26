import React from 'react';
import { FlatList } from 'react-native';

import UserListItem from './UserListItem';

const UserList = ({ users, onEditItem, onDeleteItem }) => {
  return (
    <FlatList
      data={users}
      renderItem={({ item: { key, value: user } }) => (
        <UserListItem
          _key={key}
          user={user}
          onEdit={onEditItem}
          onDelete={onDeleteItem}
        />
      )}
    />
  );
};

export default UserList;
