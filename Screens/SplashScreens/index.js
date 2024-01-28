import React from 'react';
import {Alert, View, Image} from 'react-native';
import logo from '../../Assets/logo.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    {
      /*const token= AsyncStorage.getItem('refresh-token')

  if(!token){
    navigation.navigate("GreetScreen");
    }
    if(token){
      const response= axios.get('https://resturant.techarman.me/api/auth/',{
        headers:{
          authorization:token
        }
      })
      if(response.status===200){
         AsyncStorage.setItem('email',response.data.user.email)
      }


    }*/
    }
    navigation.navigate('Dashboard');
  }, []);
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
