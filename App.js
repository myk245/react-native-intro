import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';
// custom components
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  
  const addGoalHandler = goalItem => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalItem}])
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => 
          <GoalItem item={itemData.item.value} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
