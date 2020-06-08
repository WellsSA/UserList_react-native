import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import UsersNavigator from './src/navigation/UsersNavigator';
import { initialize } from './src/helpers/db';

initialize();

// Ignoring warning about firebase setTimeout duration near 493734ms
YellowBox.ignoreWarnings(['Setting a timer for a long period of time']);
export default function App() {
  return (
    <Provider store={store}>
      <UsersNavigator />
    </Provider>
  );
}
