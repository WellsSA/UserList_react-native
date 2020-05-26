import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { metrics } from './styles';

import UserPage from './pages/User';
import UserDetailsPage from './pages/UserDetails';

export default function App() {
  const [route, setRoute] = useState('user');
  const [user, setUser] = useState(undefined);
  const [users, setUsers] = useState([]);

  const showDetails = (_user, _users) => {
    setUser(_user);
    setUsers(_users);
    setRoute('userDetails');
  };

  const showUser = _user => {
    setUser(_user);
    setRoute('user');
  };

  return (
    <View style={styles.main}>
      {route === 'user' ? (
        <UserPage user={user} iUsers={users} onEdit={showDetails} />
      ) : route === 'userDetails' ? (
        <UserDetailsPage user={user} onBack={showUser} />
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: metrics.spacing,
  },
});
