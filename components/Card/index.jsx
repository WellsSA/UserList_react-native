import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors, metrics } from '../../styles';

const Card = ({ children, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.card}>{children}</View>
    </TouchableOpacity>
  );
};

Card.defaultProps = {
  action: () => {},
};

const styles = StyleSheet.create({
  card: {
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

export default Card;
