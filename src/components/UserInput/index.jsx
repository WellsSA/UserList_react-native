import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../../styles/colors';

const UserInput = ({ placeholder = '', value, onSetValue }) => {
  return (
    <View style={styles.inputSection}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onSetValue}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomColor: colors.grayBackground,
    borderBottomWidth: 2,
    marginBottom: 15,
    paddingVertical: 4,
  },
});

export default UserInput;
