import React from 'react';

import 'react-native-gesture-handler';

import {Text, View} from 'react-native';

const ResultComponent = ({route, navigation}) => {
  console.log('params', route.params);
  const {barcode} = route.params;
  return (
    <View
      style={{
        flex: 5,
        backgroundColor: 'white',
      }}>
      <Text>QR data: {barcode}</Text>
    </View>
  );
};

export default ResultComponent;
