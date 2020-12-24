import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ScanScreen from '../components/scanScreen';
import StudentComponent from '../components/studentComponent';

const ScannerStack = createStackNavigator();

const ScannerStackScreen = () => {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen
        name="Scanner"
        component={ScanScreen}
        options={{headerShown: false}}
      />
      <ScannerStack.Screen name="Thông tin Sinh Viên" component={StudentComponent}  />
    </ScannerStack.Navigator>
  );
};
export default ScannerStackScreen;
