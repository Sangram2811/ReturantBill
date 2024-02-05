import React from 'react';
import {Alert, View, Image} from 'react-native';
import logo from '../../Assets/logo.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
    setTimeout(()=>{
      navigation.navigate('login')

    },3000)
  
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '#f8fbff',
      }}>
      <Image
        style={{
          width: '30%',
          height: '15%',
          borderRadius: 10,
        }}
        source={logo}
      />
    </View>
      

 
  );
};

export default SplashScreen;
