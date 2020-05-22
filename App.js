import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { colors, metrics } from './styles';

import { UserInput, UserList } from './components';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);
  const [userCounter, setUserCounter] = useState(0);

  // returns only even numbers greater than 10 =)
  const keyGen = key => {
    if (!key) return 10;
    return 10 + (key * 2 - 2);
  };
  // adds a user item to array with other users
  const addUser = () => {
    setUsers(users => {
      setUserCounter(userCounter + 1);
      return [
        ...users,
        {
          key: String(keyGen(userCounter + 1)),
          value: { name, phone },
        },
      ];
    });
  };

  const removeUser = keyToRemove => {
    setUsers(users => users.filter(user => user.key !== keyToRemove));
  };

  return (
    <View style={styles.main}>
      {/* Insert section */}
      <View style={styles.input}>
        <View style={styles.sub}>
          <UserInput placeholder="Nome" value={name} onSetValue={setName} />
          <UserInput
            placeholder="Telefone"
            value={phone}
            onSetValue={setPhone}
          />
        </View>
        <View style={styles.button}>
          <Button title="+" color={colors.primary} onPress={addUser}></Button>
        </View>
      </View>
      {/* List seciton */}
      <View>
        <UserList users={users} onDeleteItem={removeUser} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: metrics.spacing,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: metrics.spacing,
  },
  sub: {
    width: '90%',
    flexDirection: 'column',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});
