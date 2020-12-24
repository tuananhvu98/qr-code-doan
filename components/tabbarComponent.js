import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TitleComponent from './postsComponent';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScannerStackScreen from '../stacks/ScannerStack';
import PostsStackScreen from '../stacks/PostsStack';
import SignOutComponent from './signoutComponent';

const Tab = createBottomTabNavigator();
// tabbar bottom
const TabBarComponent = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 16,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={PostsStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="QR"
          component={ScannerStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="qrcode" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SignOut"
          component={SignOutComponent}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="sign-out" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBarComponent;
