// import * as SQLite from 'expo-sqlite';
// const db = SQLite.openDatabase('users.db');
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase';
import 'firebase/firestore';

let db = undefined;
const COLLECTION = 'users';

export const init = () => {
  return new Promise((resolve, reject) => {
    try {
      if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();
      resolve(db);
    } catch (err) {
      reject(err);
    }
  });
};

export const initialize = () => {
  init()
    .then(() => {
      console.info('Database created.');
    })
    .catch(err => {
      console.error('Database creation failed.');
      console.error(err);
    });
};

export const insertUser = (name, phone, imageURI, lastUpdate, lat, lon) => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION)
      .add({
        name,
        phone,
        imageURI,
        lastUpdate,
        lat,
        lon,
      })
      .then(resolve)
      .catch(reject);
  });
};

export const listUsers = () => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION).onSnapshot(snapshot => {
      let data = [];

      snapshot.forEach(doc => {
        data.push({
          id: doc.id,
          name: doc.data().name,
          phone: doc.data().phone,
          imageURI: doc.data().imageURI,
        });
      });

      resolve(data);
    });
  });
};

export const editUser = (id, name, phone, imageURI, lastUpdate, lat, lon) => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION)
      .doc(id)
      .update({
        name,
        phone,
        imageURI,
        lastUpdate,
        lat,
        lon,
      })
      .then(resolve)
      .catch(reject);
  });
};

export const deleteUser = id => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION).doc(id).delete().then(resolve).catch(reject);
  });
};
