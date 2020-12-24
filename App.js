import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import component
import LoginComponent from './components/loginComponent';
import TabBarComponent from './components/tabbarComponent';
import ResultComponent from './components/resultComponent';
import StudentComponent from './components/studentComponent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginComponent}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="TabBarScreen"
          component={TabBarComponent}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="ResultScreen"
          component={ResultComponent}></Stack.Screen>
        <Stack.Screen
          name="StudentScreen"
          component={StudentComponent}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
