import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TitleComponent from '../components/postsComponent';
import ContentComponent from '../components/contentComponent';

const PostsStack = createStackNavigator();

const PostsStackScreen = () => {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen
        name="PostsScreen"
        component={TitleComponent}
        options={{headerShown: false}}
      />
      <PostsStack.Screen name="ContentScreen" component={ContentComponent}  />
    </PostsStack.Navigator>
  );
};
export default PostsStackScreen;
