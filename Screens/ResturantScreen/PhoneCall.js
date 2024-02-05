// PhoneCall.js

import React from 'react';
import {View, Text, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
//import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from '@expo/vector-icons' for the phone icon
const PhoneCall = ({phoneNumber}) => {
  const handlePhoneCall = () => {
    const phoneUrl = `tel:${phoneNumber}`;

    // Open the phone app with the specified phone number
    Linking.openURL(phoneUrl).catch(error =>
      console.error('Error opening phone app:', error),
    );
  };

  return (
    <TouchableOpacity onPress={handlePhoneCall}>
      <View style={styles.container}>
      <Icon name="phone" color="#1a303d" size={20}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:40,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    marginLeft: 10,
    color: '#007AFF', // Example text color
  },
});

export default PhoneCall;
