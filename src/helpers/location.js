import * as Location from 'expo-location';
import { verifyPermissions } from './permission';

export const getCurrentUserLocation = async () => {
  const hasPermission = await verifyPermissions();

  if (hasPermission) {
    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 8000,
      });
      // console.log(location);
      return location;
    } catch (err) {
      Alert.alert(
        'An error occured',
        "We couldn't find your location. Try again later",
        [{ text: 'Ok' }]
      );
    }
  }

  return null;
};
