import React, { useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { metrics } from '../styles';
import { UserList, HeaderButton } from '../components';
import { removeUser, selectUser, listUser } from '../store/users/actions';

const User = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(listUser());
  }, []);

  const editUser = keyToEdit => {
    console.log({ users, keyToEdit });
    dispatch(
      selectUser({ user: users.find(_user => _user.key === keyToEdit) })
    );
    navigation.navigate('UserDetails');
  };

  const _removeUser = keyToRemove => {
    dispatch(removeUser({ key: keyToRemove }));
  };

  const confirmRemoveUser = keyToRemove => {
    Alert.alert(
      'Are you sure?',
      'Do you really intend to remove this contact?',
      [
        {
          text: 'Yes! (Remove it)',
          style: 'default',
          onPress: () => _removeUser(keyToRemove),
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
