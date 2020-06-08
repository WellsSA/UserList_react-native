import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import UsersNavigator from './src/navigation/UsersNavigator';
import { initialize } from './src/helpers/db';

initialize();

export default function App() {
  return (
    <Provider store={store}>
      <UsersNavigator />
    </Provider>
  );
}
