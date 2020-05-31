import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import UserInput from '../components/UserInput';
import { metrics, colors } from '../styles';

const AddUser = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const novoLugarAlterado = texto => {
    setNovoLugar(texto);
  };
  // returns only even numbers greater than 10 =)
  const keyGen = key => {
    if (!key) return 10;
    return 10 + (key * 2 - 2);
  };
  // adds a user item to array with other users
  const addUser = () => {
    // setUsers(_users => { // TODO: Waiting for redux
    //   return [
    //     ..._users,
    //     {
    //       key: String(keyGen(_users.length + 1)),
    //       value: { name, phone },
    //     },
    //   ];
    // });
    navigation.navigate('UsersList');
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.title}>Novo usuário</Text>
        <UserInput placeholder="Nome" value={name} onSetValue={setName} />
        <UserInput placeholder="Telefone" value={phone} onSetValue={setPhone} />
        <Button
          title="Salvar Usuário"
          color={colors.primary}
          onPress={addUser}
        />
      </View>
    </ScrollView>
  );
};

AddUser.navigationOptions = () => ({
  headerTitle: 'Cadastrar novo usuário',
});

const styles = StyleSheet.create({
  form: {
    margin: metrics.spacing,
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default AddUser;
