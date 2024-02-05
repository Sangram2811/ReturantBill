import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const QRScannerScreen = () => {
  const [isFlashOn, setFlashOn] = useState(false);
  const cameraRef = useRef(null);

  const toggleFlash = () => {
    setFlashOn(!isFlashOn);
    cameraRef.current?.setFlashMode(
      isFlashOn ? RNCamera.Constants.FlashMode.off : RNCamera.Constants.FlashMode.torch
    );
  };

  const onBarCodeRead = (result) => {
    // Handle the scanned QR code result
    console.log('Scanned QR Code:', result.data);
  };

  return (
    <View style={styles.container}>
         <RNCamera
        ref={cameraRef}
        style={styles.camera}
        onBarCodeRead={onBarCodeRead}
        flashMode={isFlashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
        captureAudio={false}
      >
        <View style={styles.overlay}>
          <View style={styles.box} >
     
          </View>
        </View>     
        
        </RNCamera>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
          <Text style={styles.flashText}>{isFlashOn ? 'Flash Off' : 'Flash On'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  camera: {
   height:'100%',
   width:"100%"
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderWidth: 2,
    borderColor: 'white',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  flashButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    position:'absolute',
    top:100,
left:100

  },
  flashText: {
    color: '#ccc',
  },
});

export default QRScannerScreen;
