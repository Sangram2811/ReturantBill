// ScannedDataScreen.js

import React from 'react';
import { View, Text } from 'react-native';

const ScannedDataScreen = ({ route }) => {
  const { scannedData } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{scannedData}</Text>
    </View>
  );
};

export default ScannedDataScreen;
