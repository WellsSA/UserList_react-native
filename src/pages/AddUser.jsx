import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import UserInput from '../components/UserInput';
import { metrics, colors } from '../styles';
import { addUser as addUserAction } from '../store/users/actions';

const AddUser = ({ navigation }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const novoLugarAlterado = texto => {
    setNovoLugar(texto);
  };
  // returns only even numbers greater than 10 =)

  // adds a user item to array with other users
  const addUser = () => {
    dispatch(
      addUserAction({
        name,
        phone,
      })
    );

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
