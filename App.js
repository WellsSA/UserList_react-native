import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';

export default function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  // handle user changes on input
  const handleNoteInput = stickyNote => {
    setNote(stickyNote);
  };
  
  // adds note item to array with other sticky notes
  const addNote = () => {
    setNotes (notes => [...notes, note]);
    console.log (note);
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
      <ScrollView>
      {/*Aqui será exibida a lista de lembretes*/}
      {notes.map((note, index) => 
        <View key={note+index} style={styles.listItem}>
          <Text>{note}</Text>
        </View>
      )}
      </ScrollView>
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
    padding: 2
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
