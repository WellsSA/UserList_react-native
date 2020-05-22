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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderLeftColor: colors.primary,
    borderLeftWidth: 1,
    marginBottom: 4,
    padding: 2,
    paddingLeft: 10,
    flex: 1,
  },
});

export default UserInput;
