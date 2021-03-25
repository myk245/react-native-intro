import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  };

  const addGoalHandler = () => {
    console.log(enteredGoal)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>

      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  }
});
