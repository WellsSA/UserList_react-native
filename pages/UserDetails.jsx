import React, { useState } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

import { colors, metrics } from '../styles';
import { UserInput, Card } from '../components';

const UserDetails = ({ user, onBack }) => {
  const { value } = user;

  const [name, setName] = useState(value.name);
  const [phone, setPhone] = useState(value.phone);
  const [editMode, setEditMode] = useState(false);

  const editUser = () => {
    const newUser = {
      key: user.key,
      value: { name, phone },
    };

    onBack(newUser);
  };

  return (
    <View>
      {/* List seciton */}
      <Card>
        <Text>Nome: {value.name}</Text>
        <Text>Telefone: {value.phone}</Text>
      </Card>
      <View style={styles.input}>
        <Button
          title="Editar"
          color={colors.primary}
          onPress={() => setEditMode(true)}
        ></Button>
        <Button
          title="Voltar"
          color={colors.primary}
          onPress={() => onBack()}
        ></Button>
      </View>
      {/* Edit section */}
      {editMode ? (
        <View style={styles.input}>
          <View style={styles.sub}>
            <UserInput placeholder="Nome" value={name} onSetValue={setName} />
            <UserInput
              placeholder="Telefone"
              value={phone}
              onSetValue={setPhone}
            />
            <Button
              title="OK"
              color={colors.primary}
              onPress={editUser}
            ></Button>
          </View>
          <View style={styles.button}></View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default UserDetails;
