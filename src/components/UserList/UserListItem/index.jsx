import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { colors, metrics } from '../../../styles';

const UserListItem = ({ _key, user, onEdit, onDelete }) => {
  const { name, phone, imageURI } = user;

  return (
    <TouchableOpacity
      onPress={onEdit.bind(this, _key)}
      onLongPress={onDelete.bind(this, _key)}
    >
      <View style={styles.listItem}>
        <Image style={styles.image} source={{ uri: imageURI }} />
        <Text>
          {name} - {phone}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    backgroundColor: colors.accent,
    borderColor: colors.contrast,
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: metrics.radius,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: 'center',
    alignItems: 'center',
    elevation: metrics.elevation,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: colors.primary,
    borderWidth: 1,
  },
});

export default UserListItem;
