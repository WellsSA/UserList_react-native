import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('users.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS tb_user (id INTEGER PRIMARY KEY, name TEXT NOT NULL, phone TEXT NOT NULL, imageUri TEXT NOT NULL);',
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
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

export const insertUser = (name, phone, imageUri) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO tb_user (name, phone, imageUri) VALUES (?,?,?)',
        [name, phone, imageUri],
        (_, resultado) => resolve(resultado),
        (_, err) => reject(err)
      );
    });
  });
};

export const listUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tb_user',
        [],
        (_, resultado) => resolve(resultado),
        (_, err) => reject(err)
      );
    });
  });
};
