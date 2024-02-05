import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Alert,
} from 'react-native';
// import { Image } from "expo-image";";
import {LinearGradient} from 'expo-linear-gradient';
import {
  FontFamily,
  Padding,
  Border,
  FontSize,
  Color,
} from '../../GreetScreen/GLobalStyles';
import {TextInput} from 'react-native-paper';
import Button1 from './Button1';
import axios from 'axios';
import {apiURL} from '../../../Configs/api';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const SignUp = ({navigation}) => {
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [cnfPassword, setcnfPassword] = React.useState('');
  const [hidepass, sethidepass] = React.useState(true);

  const [Loading, setLoading] = React.useState(false);

  const handleSignUp = () => {
    if (password != cnfPassword) {
      Alert.alert('Error', 'Passwords do not match', [{text: 'Okay'}]);
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Invalid Email ID', 'Please enter a valid email id.', [
        {text: 'OK', onPress: () => console.log('Email Not Valid')},
      ]);
      return;
    }
    if (password < 8) {
      Alert.alert(
        'Password Too Short',
        'Your password should be atleast 8 characters long.',
        [{text: 'OK'}],
      );
      return;
    }

    emailSignUp();
  };

  const emailSignUp = async () => {
    setLoading(true);
    try {
      const response = await axios
        .post('https://resturant.techarman.me/api/auth/signup', {
          email,
          password,
        })
        .then(res => {
          console.log(res.data);
          setLoading(false);
          Alert.alert(res.data.message);
          navigation.navigate('SignIn');
        });
    } catch (err) {
      console.log('Error');
      console.log(err);
      setLoading(false);
      Alert.alert('Email Already Exists');
      return err;
    }
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#f8fbff',
      }}>
      <View
        style={{
          height: '20%',
          width: '100%',
          backgroundColor: '#f8fbff',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            marginLeft: '10%',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Create New Account
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f8fbff',
          width: '100%',
          height: '10%',
          paddingLeft: '10%',
        }}>
        <Text
          style={{
            fontSize: 15,
            color: '#808080',
            marginTop: '5%',
          }}>
          Welcome, Lets Get Satrted by Entering {'\n'}Your Details
        </Text>
      </View>
      <View
        style={{
          height: '40%',
          width: '100%',
          backgroundColor: '#f8fbff',
          padding: '10%',
        }}>
        <TextInput
          onChangeText={text => {
            setemail(text);
          }}
          value={email}
          placeholder="Enter Email"
          cursorColor="#000000"
          textColor="#000000"
          ckeyboardAppearance="default"
          activeOutlineColor="transparent"
          underlineColor="transparent"
          underlineColorAndroid="transparent"
          activeUnderlineColor="transparent"
          style={{
            borderTopEndRadius: 15,
            borderBottomEndRadius: 15,
            borderTopStartRadius: 15,
            borderBottomStartRadius: 15,
            borderWidth: 1,
            borderColor: '#ced4da',
            paddingStart: '5%',
            backgroundColor: '#FCFCFC',
          }}
          keyboardType="email-address"
        />

        <TextInput
          onChangeText={text => {
            setpassword(text);
          }}
          value={password}
          placeholder="Enter Password"
          cursorColor="#000000"
          secureTextEntry={hidepass}
          keyboardType="visible-password"
          keyboardAppearance="default"
          textColor="#000000"
          underlineColor="transparent"
          activeOutlineColor="transparent"
          activeUnderlineColor="transparent"
          style={{borderTopEndRadius: 15,
            borderBottomEndRadius: 15,
            borderTopStartRadius: 15,
            borderBottomStartRadius: 15,
            borderWidth: 1,

            
            borderColor: '#ced4da',
            paddingStart: '5%',
            backgroundColor: '#FCFCFC',
            marginTop: '5%',
          }}
          right={
            <TextInput.Icon
              icon={'eye'}
              onPress={() => {
                sethidepass(!hidepass);
              }}
            />
          }
        />
        <TextInput
          onChangeText={text => {
            setcnfPassword(text);
          }}
          value={cnfPassword}
          autoCorrect={false}
          cursorColor="#000000"
          secureTextEntry={true}
          textContentType="oneTimeCode"
          importantForAutofill="no"
          placeholder="Confirm Password"
          keyboardAppearance="default"
          keyboardType="visible-password"
          textColor="#000000"
          activeOutlineColor="transparent"
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          style={{
            borderTopEndRadius: 15,
            borderBottomEndRadius: 15,
            borderTopStartRadius: 15,
            borderBottomStartRadius: 15,
            borderWidth: 1,
            borderColor: '#ced4da',
            paddingStart: '5%',
            backgroundColor: '#FCFCFC',
            marginTop: '5%',
          }}
        />
        <View
          style={{
            width: '100%',
            height: '20%',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={handleSignUp}
            style={{
              height: '100%',
              width: '80%',
              marginTop: '10%',
              backgroundColor: 'red',
              borderRadius: 10,
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#f8fbff'}}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f9fbff',
          height: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
      {Loading && (
        <View
          style={{
            alignSelf: 'center',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            position: 'absolute',
          }}>
          <ActivityIndicator
            size={'large'}
            animating={true}
            color={MD2Colors.red800}
          />
        </View>
      )}
    </View>
  );
};
export default SignUp;
