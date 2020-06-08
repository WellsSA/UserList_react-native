import * as FileSystem from 'expo-file-system';

export const moveFile = async from => {
  try {
    const filename = from.split('/').pop();
    const to = FileSystem.documentDirectory + filename;
    await FileSystem.moveAsync({ from, to });
    return to;
  } catch (err) {
    console.error(err);
    return null;
  }
};
