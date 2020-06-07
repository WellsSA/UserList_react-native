import * as Permissions from 'expo-permissions';

export const verifyPermissions = async () => {
  const result = await Permissions.askAsync(Permissions.LOCATION);
  if (result.status !== 'granted') {
    Alert.alert(
      'Permission to User location denied',
      "It's necessary grant permission to your location to use this app.",
      [{ text: 'Ok' }]
    );
    return false;
  }
  return true;
};
