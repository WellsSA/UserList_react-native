import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function App() {
  const [note, setNote] = useState('');
  
  // handle user changes on input
  const handleNoteInput = stickyNote => {
    setNote(stickyNote);
  };
  
  // adds note item to array with other sticky notes
  const addNote = () => {
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
      <View>
      {/*Aqui será exibida a lista de lembretes*/}
      
      </View>
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
  }
});
