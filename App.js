// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SeleteSample } from './view/seletesample';
import { AlignContent } from './view/aligncontent';
import { ToDoListHome } from './view/todolist';
import { CustomNavigationBar } from './component/customnavigatebar';
import { ToDoListAdd } from './view/todolist_addlist';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SeleteSample'
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}>
        <Stack.Screen
          name='SeleteSample'
          component={SeleteSample}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='AlignContent'
          component={AlignContent}
          options={{ title: 'AlignContent' }}
        />
        <Stack.Screen
          name='ToDoListHome'
          component={ToDoListHome}
          options={{
            title: 'ToDoList', 
            defaultNavigationOptions: {
              title: 'Aligned Center',
              headerTitleAlign: 'center'
            }
          }}
        />
        <Stack.Screen
          name='ToDoListAdd'
          component={ToDoListAdd}
          options={{ title: 'AddList' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;