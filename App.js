import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, FlatList } from 'react-native';

import { UserInput, UserList } from './components';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);
  const [userCounter, setUserCounter] = useState(0);
  
  // returns only even numbers greater than 10 =)
  const keyGen = key => {
    if(!key) return 10;
    return 10 + (key * 2 - 2);
  }
  // adds a user item to array with other users
  const addUser = () => {
    
    setUsers (users => {
      setUserCounter(userCounter + 1);
      return [...users, {
        key: String(keyGen(userCounter + 1)),
        value: { name, phone },
      }];
    });
  }

  const removeUser = keyToRemove => {
    setUsers(users => users.filter(user => user.key !== keyToRemove));
  }

  return (
    <View style={styles.mainView}>
      {/* Insert section */}
      <View style={styles.inputView}>
        <UserInput placeholder="Nome" value={name} onSetValue={setName} />
        <UserInput placeholder="Telefone" value={phone} onSetValue={setPhone} />
        <Button title="+" onPress={addUser}></Button>
      </View>
      {/* List seciton */}
      <View>
        <UserList users={users} onDeleteItem={removeUser} /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 50,
  },
  inputView: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
