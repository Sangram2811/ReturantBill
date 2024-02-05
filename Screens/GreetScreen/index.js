import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Alert,
  Image,
  Button,
} from 'react-native';
// import { Image } from "expo-image";";
import {LinearGradient} from 'expo-linear-gradient';
import {FontFamily, Padding, Border, FontSize, Color} from './GLobalStyles';
import logo from '../../Assets/logo.png';
import image2 from '../../Assets/image2.png';
import { Auth0Provider,useAuth0 } from 'react-native-auth0';

const LoginButton = () => {
  const {authorize,user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;
console.log(user)

  const onPress = async () => {
      try {
          await authorize();
      
      } catch (e) {
          console.log(e);
      }
  };

  return (
    <Pressable
    id="btnlogin"
    onPress={onPress}
    style={{
     zIndex: 10,
      elevation: 10,
      width: '80%',
      backgroundColor: 'red',
      height: '55%',
     borderRadius: 15,
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text
      style={{
        color: '#f8fbff',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 400,
      }}>
      Create a New Account
    </Text>
  </Pressable>
  )
}

const LoginButton2 = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
      try {
          await authorize();
      } catch (e) {
          console.log(e);
      }
  };

  return (  <Pressable
    onPress={onPress}>
    <Text
      style={{
        color: 'red',
        fontSize: 20,
      }}>
      Login
    </Text>
  </Pressable>
  )
}



const AUth=()=>{
  const {authorize, clearSession, user, error, isLoading} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  if (isLoading) {
    return <View style={styles.container}><Text>Loading</Text></View>;
  }

  const loggedIn = user !== undefined && user !== null;
  return (
    <View style={styles.container}>
      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}
      {error && <Text>{error.message}</Text>}

      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );

}

const GreetScreen = ({navigation}) => {

  
  return (
    <Auth0Provider   domain={"payapp.us.auth0.com"} clientId={"TD5MZXgT44NmovoIcMrZMO49dPvsvAUN"}  >
          <View style={{width: '100%', height: '100%', backgroundColor: '#f8fbff'}}>    
            <AUth/>

      <View
        style={{
          height: '10%',
          backgroundColor: '#f8fbff',
        }}>
        <View
          style={{
            backgroundColor: '#f8fbff',
            width: '100%',
            height: '70%',
            marginTop: '15%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: '100%',
              width: '15%',
              padding: '1%',
             borderRadius: 10,
              position: 'relative',
              margin: '10%',
            }}
            source={logo}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: '10%',
          backgroundColor: '#f8fbff',
          height: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: '60%',
            width: '80%',
          }}
          source={image2}
        />
      </View>
      <View
        style={{
          height: '10%',
          backgroundColor: '#f8fbff',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
     
     <LoginButton/>

      </View>
      <View
        style={{
          height: '5%',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
          <LoginButton2/>
      </View>
    </View>
    </Auth0Provider>
  );
};

const styles = StyleSheet.create({
  createTypo: {
    fontFamily: FontFamily.button,
    fontWeight: '700',
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xl,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderRadius: 20,
    left: 0,
    width: 335,
    position: 'absolute',
  },
  skipPosition: {
    top: 28,
    position: 'absolute',
  },
  orderFromYour: {
    top: 101,
    left: 80,
    fontSize: FontSize.header1_size,
    letterSpacing: -0.7,
    fontFamily: FontFamily.header1,
    color: '#1c1c1c',
    textAlign: 'center',
    fontWeight: '700',
    position: 'absolute',
  },
  iphone11ProX14Child: {
    top: 509,
    left: 164,
    width: 48,
    height: 8,
    position: 'absolute',
  },
  skip: {
    left: 322,
    color: '#fa5a1e',
    textAlign: 'right',
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.button,
    top: 28,
    position: 'absolute',
  },
  iphone11ProX14Item: {
    top: 209,
    left: 22,
    width: 338,
    height: 255,
    position: 'absolute',
  },
  createAnAccount: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.1,
    lineHeight: 21,
    color: Color.colorWhite,
    width: '100%',
    textAlign: 'center',
  },
  button: {
    top: 0,
    backgroundColor: 'transparent',
  },
  createAnAccount1: {
    color: Color.primaryColor,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.button,
    textAlign: 'center',
    width: '100%',
  },
  button1: {
    top: 71,
  },
  buttonParent: {
    top: 577,
    left: 25,
    height: 125,
    width: 335,
    position: 'absolute',
  },
  icon: {
    left: 175,
    width: 34,
    height: 23,
  },
  iphone11ProX14: {
    backgroundColor: '#f8fbff',
    flex: 1,
    width: '100%',
    height: 812,
    marginTop: '10%',
    overflow: 'hidden',
  },
});

export default GreetScreen;
