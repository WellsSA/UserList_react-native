import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { metrics } from '../styles';
import { UserList, HeaderButton } from '../components';

const DEFAULT_USERS = [
  {
    key: '10',
    value: { name: 'Zezim', phone: '11977774444' },
  },
  {
    key: '12',
    value: { name: 'Zezim2', phone: '11977775555' },
  },
  {
    key: '14',
    value: { name: 'Zezim3', phone: '11977775555' },
  },
]; // TODO: Refactor using redux

const User = ({ user, iUsers = DEFAULT_USERS, onEdit = () => {} }) => {
  const [users, setUsers] = useState(iUsers);

  useEffect(() => {
    if (user) {
      const index = users.findIndex(_user => _user.key === user.key);
      setUsers(prevUsers => {
        const _users = [...prevUsers];
        _users[index] = user;
        return _users;
      });
    }
  }, []);

  const editUser = keyToEdit => {
    onEdit(
      users.find(_user => _user.key === keyToEdit),
      users
    );
  };

  const removeUser = keyToRemove => {
    setUsers(users => users.filter(_user => _user.key !== keyToRemove));
  };

  const confirmRemoveUser = keyToRemove => {
    Alert.alert(
      'Are you sure?',
      'Do you really intend to remove this contact?',
      [
        {
          text: 'Yes! (Remove it)',
          style: 'default',
          onPress: () => removeUser(keyToRemove),
        },
        {
          text: 'No! (Cancel)',
          style: 'cancel',
        },
      ]
    );
  };

  return (
    <View style={styles.main}>
      <UserList
        users={users}
        onEditItem={editUser}
        onDeleteItem={confirmRemoveUser}
      />
    </View>
  );
};

User.navigationOptions = navData => ({
  headerTitle: 'Todos os usuários',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Adicionar"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => {
          navData.navigation.navigate('AddUser');
        }}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  main: {
    padding: metrics.spacing,
  },
});

export default User;
