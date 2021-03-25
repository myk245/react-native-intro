import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
   return (
      <View style={styles.listItem}>
         <Text>{props.item}</Text>
      </View>
   )
};

const styles = StyleSheet.create({
   listItem: {
      padding: 10,
      margin: 10,
      width: 200,
      backgroundColor: '#d1ede9',
      borderColor: 'gray',
      borderWidth: 1
   }
});

export default GoalItem