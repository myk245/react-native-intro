import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
// custom components
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  // controls whether add goal modal is visible or not
  const [addMode, setAddMode] = useState(false);
  
  const addGoalHandler = goalItem => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalItem }]);
    setAddMode(false); 
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    })
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)}/>
      <GoalInput visible={addMode} onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            id={itemData.item.id}
            item={itemData.item.value}
            onDelete={removeGoalHandler}
          />
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