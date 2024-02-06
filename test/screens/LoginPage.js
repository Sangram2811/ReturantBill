import React, { useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Pressable, StatusBar, Alert } from 'react-native';
import { TextInput,Avatar } from 'react-native-paper';
import SignInWithGoogleButton from '../Components/google/signinbtn';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const LoginPage = ({navigation}) => {
    const [cap,setcap]=useState(null)

  const [email, setEmail] = useState({
    email:'',
    password:''
  });
  const [phone, setPhone] = useState({
    phone:'+91',
    otp:''
  });
  const [otpScreen ,setotpscreen]=useState(false)
  const [activeTab, setActiveTab] = useState('email');
  const [otp,setotp]=useState()
const handleotpsubmit=async()=>{
   cap.confirm(phone.otp)
   .then((res)=>{
    console.log(res)
   })
  
}
function onAauthCHange(user){
    if(user){
        console.log(user)
        navigation.navigate('main',{user:user})
    }
}

useEffect(()=>{
const authChange=auth().onAuthStateChanged(onAauthCHange)
return authChange
},[])
async function onGoogleButtonPress() {
    GoogleSignin.configure({
        webClientId:'393961825543-ho36ap5br8s7i4b7psf79al2k6gq2lqp.apps.googleusercontent.com'
    })
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

const handlesendOTP=async(phone)=>{
    await auth().signInWithPhoneNumber(phone)
    .then((res)=>{
        console.log(res)
setcap(res)
    })
 .catch((res)=>{
    console.log(res)
   })
}
  const handleLogin = async() => {
    if (activeTab === 'email') {
      // Handle email login
    await auth().signInWithEmailAndPassword(
        email.email,
        email.password
    ).then((res)=>{
        console.log(res)
    })
    
    } else {
      // Handle phone login
  
await handlesendOTP(phone.phone)
  setotpscreen(true)    
        
    

    }
  };     

  return (
    <View style={styles.container}>
    <StatusBar 
    backgroundColor={'white'}
    barStyle='dark-content'


    />
    
        <View style={{height:100,width:'100%',display:'flex',alignContent:'center',alignItems:'center'}}>
            <Avatar.Image
            size={80}
            source={require('../../Assets/logo.png')}
            style={{
                
            
            
            }}
            />


        </View>


{!otpScreen && (

<View style={{
    width:"100%",
    paddingHorizontal:20,
    alignItems:'center',
    justifyContent:'center'
}} > 

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('email')} style={[styles.tabButton, activeTab === 'email' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'email' && styles.activeTabText]}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('phone')} style={[styles.tabButton, activeTab === 'phone' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'phone' && styles.activeTabText]}>Phone</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'email' ? (
        <View style={styles.formContainer}>
          <TextInput
          activeOutlineColor='transparent'
          activeUnderlineColor='transparent'
          underlineColor='transparent'
          
            placeholder="Enter your email"
            value={email.email}
            onChangeText={(text)=>{
                setEmail({...email,email:text})
            }}
            style={styles.input}
          />
          <TextInput

activeOutlineColor='transparent'
activeUnderlineColor='transparent'
underlineColor='transparent'

            placeholder="Enter your password"
            value={email.password}
            onChangeText={(text)=>{
                setEmail({...email,password:text})
            }}
            secureTextEntry
            style={styles.input}
          />
        </View>
      ) : (
        <View style={styles.formContainer}>
          <TextInput
          activeOutlineColor='transparent'
          activeUnderlineColor='transparent'
          underlineColor='transparent'
            placeholder="Enter your phone number"
            value={phone.phone}
            onChangeText={(text)=>{
                setPhone({...phone,phone:text})
            }}
            keyboardType="phone-pad"
            style={styles.input}
          />
         
        </View>
      )}
      <Pressable style={{
    paddingHorizontal:80,
    paddingVertical:15,
    borderRadius:15,
    backgroundColor:'red',

      }}  
      id="recaptcha"
      onPress={handleLogin}  ><Text style={{color:'white'}} >Login</Text></Pressable>
      </View>
)}

{otpScreen && (

<View style={{
    width:"100%",
    paddingHorizontal:20,
    alignItems:'center',
    justifyContent:'center'
}} >
   <View style={styles.formContainer}>
          <TextInput
          activeOutlineColor='transparent'
          activeUnderlineColor='transparent'
          underlineColor='transparent'
            placeholder="Enter OTP"
            value={otp}
            onChangeText={(text)=>{
                setotp(text)
            }}
          
            keyboardType='phone-pad'
            style={styles.input}
          />
         
        </View>
     
      <Pressable style={{
    paddingHorizontal:80,
    paddingVertical:15,
    borderRadius:15,
    backgroundColor:'red',

      }}  onPress={handleotpsubmit}  ><Text style={{color:'white'}} >Login</Text></Pressable>
      </View>
)}

      <View style={styles.bottomLinks}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.googleSignInContainer}>
        <SignInWithGoogleButton 
        press={
            async()=>{
                await onGoogleButtonPress()
                .then((res)=>{
                    console.log(res)
                })


            }
        }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 18,
    color: 'black',
  },
  activeTab: {
    borderBottomColor: 'blue',
  },
  activeTabText: {
    color: 'blue',
  },
  formContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
backgroundColor:'rgba(255,255,255,0.5)',

    borderColor: 'gray',
    borderRadius: 15,
    borderTopEndRadius:15,
    borderTopStartRadius:15,
    paddingVertical: 12,
    paddingStart:10,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  bottomLinks: {
    flexDirection: 'row',
    marginTop: 20,
  },
  forgotPasswordText: {
    marginRight: 10,
    color: 'blue',
  },
  signUpText: {
    color: 'blue',
  },
  googleSignInContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default LoginPage;

