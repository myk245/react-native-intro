import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}])
  };

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

      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        }
      />

      {/* <ScrollView>
        {courseGoals.map(goal => 
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        )}
      </ScrollView> */}
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
  },
  listItem: {
    padding: 10,
    margin: 10,
    width: 200, 
    backgroundColor: '#d1ede9',
    borderColor: 'gray',
    borderWidth: 1
  }
});
