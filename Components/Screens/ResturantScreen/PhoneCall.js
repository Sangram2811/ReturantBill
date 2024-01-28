// PhoneCall.js

import React from 'react';
import {View, Text, TouchableOpacity, Linking, StyleSheet} from 'react-native';
// import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from '@expo/vector-icons' for the phone icon

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const PhoneCall = ({phoneNumber}) => {
  const handlePhoneCall = () => {
    const phoneNumberWithoutSpaces = phoneNumber.replace(/\s/g, ''); // Remove spaces from the phone number
    const phoneUrl = `tel:${phoneNumberWithoutSpaces}`;

    // Open the phone app with the specified phone number
    Linking.openURL(phoneUrl).catch(error =>
      console.error('Error opening phone app:', error),
    );
  };

  return (
    <TouchableOpacity onPress={handlePhoneCall}>
      <View style={styles.container}>
        <FontAwesome name="phone" size={20} color="#007AFF" />
        <Text style={styles.text}>Call</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#EFEFF4', // Example background color
    borderRadius: 8,
  },
  text: {
    marginLeft: 10,
    color: '#007AFF', // Example text color
  },
});

export default PhoneCall;
