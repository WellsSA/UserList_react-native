// import * as SQLite from 'expo-sqlite';
// const db = SQLite.openDatabase('users.db');
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase';
import 'firebase/firestore';

let db = undefined;

export const init = () => {
  return new Promise((resolve, reject) => {
    try {
      if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();

      db.collection('lembretes').add({
        texto: 'Aeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeew',
        data: new Date(),
      });

      resolve(db);
    } catch (err) {
      reject(err);
    }

    // db.transaction(tx => {
    //   tx.executeSql(
    //     'CREATE TABLE IF NOT EXISTS tb_user (id INTEGER PRIMARY KEY, name TEXT NOT NULL, phone TEXT NOT NULL, imageURI TEXT NOT NULL, lastUpdate TEXT NOT NULL, lat REAL NOT NULL, lon REAL NOT NULL);',
    //     [],
    //     () => resolve(),
    //     (_, err) => reject(err)
    //   );
    // });
  });
};

export const initialize = () => {
  init()
    .then(() => {
      console.log('Database created.');
    })
    .catch(err => {
      console.log('Database creation failed.');
      console.log(err);
    });
};

export const insertUser = (name, phone, imageURI, lastUpdate, lat, lon) => {
  return new Promise((resolve, reject) => {
    resolve();
    // db.transaction(tx => {
    //   tx.executeSql(
    //     'INSERT INTO tb_user (name, phone, imageURI, lastUpdate, lat, lon) VALUES (?,?,?,?,?,?)',
    //     [name, phone, imageURI, lastUpdate, lat, lon],
    //     (_, resultado) => resolve(resultado),
    //     (_, err) => reject(err)
    //   );
    // });
  });
};

export const listUsers = () => {
  return new Promise((resolve, reject) => {
    resolve();
    // db.transaction(tx => {
    //   tx.executeSql(
    //     'SELECT * FROM tb_user',
    //     [],
    //     (_, resultado) => resolve(resultado),
    //     (_, err) => reject(err)
    //   );
    // });
  });
};

export const editUser = (id, name, phone, imageURI, lastUpdate, lat, lon) => {
  return new Promise((resolve, reject) => {
    resolve();
    // db.transaction(tx => {
    //   tx.executeSql(
    //     'UPDATE tb_user SET name=?, phone=?, imageURI=?, lastUpdate=?, lat=?, lon=? WHERE id=?',
    //     [name, phone, imageURI, lastUpdate, lat, lon, id],
    //     (_, resultado) => resolve(resultado),
    //     (_, err) => reject(err)
    //   );
    // });
  });
};

export const deleteUser = id => {
  return new Promise((resolve, reject) => {
    resolve();
    // db.transaction(tx => {
    //   tx.executeSql(
    //     'DELETE FROM tb_user WHERE id=?',
    //     [id],
    //     (_, resultado) => resolve(resultado),
    //     (_, err) => reject(err)
    //   );
    // });
  });
};
