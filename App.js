// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeleteSample } from './view/seletesample';
import { AlignContent } from './view/aligncontent';
import { ToDoListHome } from './view/todolist';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SeleteSample'>
        <Stack.Screen name='SeleteSample' component={SeleteSample} />
        <Stack.Screen name='AlignContent' component={AlignContent} />
        <Stack.Screen name='ToDoListHome' component={ToDoListHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;