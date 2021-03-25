import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
   return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
         <View style={styles.listItem}>
            <Text>{props.item}</Text>
         </View>
      </TouchableOpacity>
   )
};

const styles = StyleSheet.create({
   listItem: {
      padding: 10,
      margin: 10,
      backgroundColor: '#eeeeee',
      borderColor: 'gray',
      borderWidth: 1
   }
});

export default GoalItem