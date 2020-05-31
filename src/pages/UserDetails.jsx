import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Button, View, Text } from 'react-native';

import { colors, metrics } from '../styles';
import { UserInput, Card, TakePicture } from '../components';
import { editUser } from '../store/users/actions';

const UserDetails = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.selectedUser);

  if (!user) return <Text>Error</Text>;
  const [name, setName] = useState(user.value.name);
  const [phone, setPhone] = useState(user.value.phone);
  const [editMode, setEditMode] = useState(false);
  const [imageURI, setImageURI] = useState();

  const handlePictureTaken = _imageURI => {
    setImageURI(_imageURI);
  };

  const _editUser = () => {
    const newUser = {
      key: user.key,
      value: { name, phone, imageURI },
    };

    dispatch(editUser({ user: newUser }));
    navigation.navigate('UsersList');
  };

  return (
    <View style={styles.main}>
      {/* List seciton */}
      <Card>
        <Text>Nome: {user.value.name}</Text>
        <Text>Telefone: {user.value.phone}</Text>
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
            <TakePicture onPictureTaken={handlePictureTaken} />
            <Button
              title="OK"
              color={colors.primary}
              onPress={_editUser}
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
  main: {
    padding: metrics.spacing,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
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
