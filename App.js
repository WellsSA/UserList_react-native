import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);
  const [userCounter, setUserCounter] = useState(0);
  
  // adds a user item to array with other users
  const addUser = () => {
    console.log (name);
    
    setUsers (users => {
      setUserCounter(userCounter + 1);
      return [...users, {
        key: String(userCounter * 10),
        value: { name, phone },
      }];
    });
  }

  return (
    <View style={styles.mainView}>
      {/* Insert section */}
      <View style={styles.inputView}>
        <View style={styles.inputSection}>
          <TextInput 
            placeholder="Nome" 
            style={styles.input}
            onChangeText={setName}
            value={name}
          />
        </View>
        <View style={styles.inputSection}>
          <TextInput 
            placeholder="Telefone" 
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
          />
          <Button title="+" onPress={addUser}></Button>
        </View>
      </View>
      {/* List seciton */}
      <FlatList
        data={users}
        renderItem={
          ({ item: { value: { name, phone } } }) => (
            <View style={styles.listItem}>
              <Text>{name} - {phone}</Text>
            </View>
          )
        }
      />
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
  inputSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderLeftColor: 'black',
    borderLeftWidth: 1, 
    marginBottom: 4, 
    padding: 2,
    paddingLeft: 10,
    flex: 1,
  },
  listItem: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});
