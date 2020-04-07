import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const UserList = ({ _key, user, onDelete  }) => {
  const { name, phone } = user;

  return (
    <TouchableOpacity onLongPress={onDelete.bind(this, _key)}>
      <View style={styles.listItem}>
        <Text>{name} - {phone}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});

export default UserList;