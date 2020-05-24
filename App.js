import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { metrics } from './styles';

import UserPage from './pages/User';

export default function App() {
  return (
    <View style={styles.main}>
      <UserPage></UserPage>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: metrics.spacing,
  },
});
