import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
   const [enteredGoal, setEnteredGoal] = useState('');
   
   const goalInputHandler = enteredText => {
      setEnteredGoal(enteredText)
   };

   const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      // reset goal input
      setEnteredGoal('');
   }

   return (
      <Modal visible={props.visible} animationType="slide">
         <View style={styles.inputContainer}>
            <TextInput
               style={styles.textInput}
               placeholder="Course Goal"
               onChangeText={goalInputHandler}
               value={enteredGoal}
            />
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                  <Button
                     title="CANCEL"
                     color="red"
                     onPress={props.onCancel}
                  />
               </View>
               <View style={styles.button}>
                  <Button
                     title="ADD"
                     onPress={addGoalHandler}
                  />
               </View>
            </View>
         </View>
      </Modal>
   )
};

const styles = StyleSheet.create({
   inputContainer: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
   },
   textInput: {
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '50%'
   },
   button: {
      width: '40%'
   }
});

export default GoalInput