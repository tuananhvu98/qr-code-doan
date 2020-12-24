import React from 'react';
import {RNCamera} from 'react-native-camera';

const ScanComponent = ({onBarcodeChange}) => {
  const barcodeRecognized = (result) => {
    console.log('data : ', result.data);
    onBarcodeChange(result.data);
  };
  return (
    <RNCamera
      ref={(ref) => {
        // this.camera = ref;
      }}
      captureAudio={false}
      style={{flex: 1}}
      type={RNCamera.Constants.Type.back}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      onBarCodeRead={barcodeRecognized}
    />
  );
};

export default ScanComponent;
