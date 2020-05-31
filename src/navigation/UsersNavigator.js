import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import colors from '../styles/colors';

import UserPage from '../pages/User';
import UserDetailsPage from '../pages/UserDetails';
import AddUserPage from '../pages/AddUser';

const UsersNavigator = createStackNavigator(
  {
    UsersList: UserPage,
    UserDetails: UserDetailsPage,
    AddUser: AddUserPage,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : colors.accent,
    },
  }
);

export default createAppContainer(UsersNavigator);
