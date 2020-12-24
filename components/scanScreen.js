import React from 'react';

import 'react-native-gesture-handler';

import {View} from 'react-native';
import ScanComponent from './scanComponent';

const ScanScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 5,
        backgroundColor: 'white',
      }}>
      <ScanComponent
        onBarcodeChange={(barcode) =>
          navigation.navigate('Thông tin Sinh Viên', {barcode})
        }
      />
    </View>
  );
};

export default ScanScreen;
