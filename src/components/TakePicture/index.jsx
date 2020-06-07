import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import colors from '../../styles/colors';
const TakePicture = ({ defaultImage = null, onPictureTaken }) => {
  const [imageURI, setImageURI] = useState(defaultImage);

  const takeAPicture = async () => {
    const picture = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    setImageURI(picture.uri);
    onPictureTaken(picture.uri);
  };

  return (
    <View style={styles.main}>
      <View style={styles.imagePreview}>
        {!imageURI ? (
          <Text>Nenhuma foto.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: imageURI }} />
        )}
      </View>
      <Button
        title="Tirar foto"
        color={colors.primary}
        onPress={takeAPicture}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginBottom: 15,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default TakePicture;
