import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';

import { colors, metrics } from '../styles';
import { UserInput, Card, TakePicture } from '../components';
import { editUser } from '../store/users/actions';
import { getCurrentUserLocation } from '../helpers/location';

const UserDetails = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.selectedUser);

  if (!user) return navigation.navigate('UsersList');
  const [name, setName] = useState(user.value.name);
  const [phone, setPhone] = useState(user.value.phone);
  const [editMode, setEditMode] = useState(false);
  const [imageURI, setImageURI] = useState(user.value.imageURI);
  const [userLocation, setUserLocation] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const getLocation = async () => {
      setLoading(true);
      const _userLocation = await getCurrentUserLocation();

      if (!_userLocation) {
        navigation.navigate('UsersList');
      }

      setUserLocation(_userLocation);
      setLoading(false);
    };

    getLocation();
  }, []);

  const handlePictureTaken = _imageURI => {
    setImageURI(_imageURI);
  };

  const _editUser = () => {
    if (loading) {
      return Alert.alert(
        'Wait a moment',
        "We're trying to find your location yet.",
        [{ text: 'Ok' }]
      );
    }
    const newUser = {
      key: user.key,
      value: {
        id: user.value.id,
        name,
        phone,
        imageURI,
        location: userLocation,
      },
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
            <TakePicture
              defaultImage={user.value.imageURI}
              onPictureTaken={handlePictureTaken}
            />
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
