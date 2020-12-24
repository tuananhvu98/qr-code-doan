import React from 'react';

import 'react-native-gesture-handler';

import {Image, View, Text} from 'react-native';

const ContentComponent = ({route, navigation}) => {
  const item = route.params.item;
  return (
    <View
      style={{
        flex: 5,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 3,
          flexDirection: 'column-reverse',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{
            uri:
              'http://35.240.216.132:5555' +
              item.images_posts?.formats?.medium?.url,
          }}
          style={{
            width: 300,
            height: 300,
          }}
          // source={require('../images/content1.png')}
        />
        <Text>{item.title_posts}</Text>
      </View>
    </View>
  );
};

export default ContentComponent;
