import React, { useState } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
// custom components
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  
  const addGoalHandler = goalItem => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalItem }])
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem item={itemData.item.value} />
        }
      />
    </View>
  );
}; 

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

export default App 