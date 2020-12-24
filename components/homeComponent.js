import React from 'react';

import 'react-native-gesture-handler';

import {Image, View} from 'react-native';
import Button from 'react-native-button';

const HomeComponent = ({navigation}) => {
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
          style={{
            width: 300,
            height: 300,
          }}
          source={require('../images/logodhtl.png')}
        />
      </View>
      <View style={{flex: 2}}>
        <View
          style={{
            shadowRadius: 20,
            showdowOpacity: 0.5,
          }}>
          <Button
            style={{
              fontSize: 20,
              color: 'white',
              backgroundColor: 'blue',
              borderRadius: 16,
              padding: 8,
              marginLeft: 90,
              marginRight: 90,
            }}
            onPress={() => {
              navigation.navigate('ScanScreen');
            }}>
            Scan QR Code
          </Button>
        </View>
      </View>
    </View>
  );
};

export default HomeComponent;
