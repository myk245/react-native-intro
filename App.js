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
    // handle empty user input
    if (goalItem.length === 0) {
      return; 
    }

    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalItem }]);
    setAddMode(false); 
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    })
  };

  const cancelGoalAddHandler = () => {
    // close modal
    setAddMode(false);
  }; 

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)}/>
      <GoalInput visible={addMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler} />
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