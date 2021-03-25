import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
   const [enteredGoal, setEnteredGoal] = useState('');
   
   const goalInputHandler = enteredText => {
      setEnteredGoal(enteredText)
   };

   return (
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.textInput}
            placeholder="Course Goal"
            onChangeText={goalInputHandler}
            value={enteredGoal}
         />
         <Button
            title="ADD"
            onPress={() => props.onAddGoal(enteredGoal)}
         />
      </View>
   )
};

const styles = StyleSheet.create({
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

export default GoalInput