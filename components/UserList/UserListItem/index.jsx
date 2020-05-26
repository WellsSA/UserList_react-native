import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, metrics } from '../../../styles';

const UserListItem = ({ _key, user, onEdit, onDelete }) => {
  const { name, phone } = user;

  return (
    <TouchableOpacity
      onPress={onEdit.bind(this, _key)}
      onLongPress={onDelete.bind(this, _key)}
    >
      <View style={styles.listItem}>
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
    elevation: metrics.elevation,
  },
});

export default UserListItem;
