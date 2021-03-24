import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  return (
    <View style={{
      padding: 50
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TextInput
          style={{
            width: 200, 
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10
          }}
          placeholder="Course Goal" />
        <Button title="ADD"/>
      </View>

      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
