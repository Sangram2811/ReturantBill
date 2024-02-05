import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet,Image } from 'react-native';
import GoogleIcon from '../../assets/google';

const SignInWithGoogleButton = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.iconContainer}>
        <Image style={{
            height:40,
            width:40
        }} source={{uri:'https://img.icons8.com/color/48/google-logo.png'}}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#747775',
    borderRadius: 40,
    paddingHorizontal: 12,
    height: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    maxWidth: 400,
    minWidth: 300,
  },
  iconContainer: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 20,
    height: 20,
    paddingStart:10
  },
  textContainer: {
    flex: 1,
    overflow: 'hidden',
    paddingLeft:10
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    letterSpacing: 0.25,
    fontSize: 14,
    color: '#1f1f1f',
  },
});

export default SignInWithGoogleButton;
