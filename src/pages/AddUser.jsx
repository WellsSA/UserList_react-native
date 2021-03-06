import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import { UserInput, TakePicture } from '../components';
import { metrics, colors } from '../styles';
import { addUser as addUserAction } from '../store/users/actions';
import { getCurrentUserLocation } from '../helpers/location';

const AddUser = ({ navigation }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [imageURI, setImageURI] = useState();
  const [userLocation, setUserLocation] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const getLocation = async () => {
      setLoading(true);
      const _userLocation = await getCurrentUserLocation();

      if (!_userLocation) {
        return navigation.navigate('UsersList');
      }

      setUserLocation(_userLocation);
      setLoading(false);
    };

    getLocation();
  }, []);

  const handlePictureTaken = imageURI => {
    setImageURI(imageURI);
  };
  // returns only even numbers greater than 10 =)

  // adds a user item to array with other users
  const addUser = () => {
    if (loading) {
      return Alert.alert(
        'Wait a moment',
        "We're trying to find your location yet.",
        [{ text: 'Ok' }]
      );
    }
    dispatch(
      addUserAction({
        user: {
          name,
          phone,
          imageURI,
          location: userLocation,
        },
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
        <TakePicture onPictureTaken={handlePictureTaken} />
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
