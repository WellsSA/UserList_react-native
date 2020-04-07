import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';

export default function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [noteCounter, setNoteCounter] = useState(0);

  // handle user changes on input
  const handleNoteInput = stickyNote => {
    setNote(stickyNote);
  };
  
  // adds note item to array with other sticky notes
  const addNote = () => {
    console.log (note);
    
    setNotes (notes => {
      setNoteCounter(noteCounter + 1);
      return [...notes, {
        key: String(noteCounter),
        value: note,
      }];
    });
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.ReminderView}>
      {/* usuário irá inserir lembretes aqui*/}
      <TextInput 
        placeholder="Lembrar..." 
        style={styles.ReminderInput}
        onChangeText={handleNoteInput}
        value={note}
      />
      <Button title="+" onPress={addNote}></Button>
      </View>
      {/*Aqui será exibida a lista de lembretes*/}
      <FlatList
        data={notes}
        renderItem={
          note => (
            <View style={styles.listItem}>
              <Text>{note.item.value}</Text>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 50,
  },
  ReminderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ReminderInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 2,
    flex: 1,
  },
  listItem: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});
