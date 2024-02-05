import React, {useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableWithoutFeedback,
    Pressable,
} from 'react-native';

import * as RootNavigation from '../navigation/RootNavigation';

import Input from '../Components/login/Input';
import Button from '../Components/login/Button';
import SignInWithGoogleButton from '../Components/google/signinbtn';
import { TextInput } from 'react-native-paper';

export default function Login() {
    const [passwordSecure, setPasswordSecure] = useState(true);
    const [isEmail,isEMail]=useState(false)
    const [data,setdata]=useState({
        email:'',
        phone:'',
        password:'',
    })


    return <View style={styles.container}>
        <Image
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={2}
            source={require('../assets/login/background.jpg')}
        />

       <View style={{
        height:40,
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
       }}  >
        <View style={{
            height:'100%',
            width:200,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'flex-start'
        }} >

<Pressable style={{
width:10,
backgroundColor:'red'
}} >
    <Text >Email</Text>
</Pressable>

        </View>
        
        </View> 
        {isEMail ? ( <View style={styles.formContainer}>
            <Text style={styles.title}>Pay App</Text>
            <Text style={styles.subtitle}>Pay With Ease</Text>
            <View style={styles.inputsContainer}>
              <TextInput 
              style={{
                height:80,
                borderRadius:15,
                borderTopEndRadius:15,
                borderTopStartRadius:15,
                backgroundColor:'rgba(255,255,255,0.5)',
                paddingStart:10


              }}
              underlineColor='transparent'
              outlineColor='transparent'
              activeOutlineColor='transparent'
              activeUnderlineColor='transparent'
              placeholder='Email '
            
              placeholderTextColor={'white'}
              left={
                <TextInput.Icon  icon={'email' } size={30} style={{paddingLeft:10}} color={'#ccc'} />
              }
              

              />
                <View style={{height: 25}} />
                <Input
                    
                    placeholder="Password"
                    endingAction={()=>setPasswordSecure(!passwordSecure)}
                    leadingIcon={require("../assets/login/key.png")}
                    endingIcon={require("../assets/login/view.png")}
                />
            </View>
            <Button title="Login to account" action={()=> RootNavigation.navigate("main")} />
            <View style={styles.accountActions}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <Text style={styles.accountActionText}>Forgot Password?</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <Text style={styles.accountActionText}>No Account Yet?</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
): ( <View style={styles.formContainer}>
            <Text style={styles.title}>Pay App</Text>
            <Text style={styles.subtitle}>Pay With Ease</Text>
            <View style={styles.inputsContainer}>
              <TextInput 
              style={{
                height:80,
                borderRadius:15,
                borderTopEndRadius:15,
                borderTopStartRadius:15,
                backgroundColor:'rgba(255,255,255,0.5)',
                paddingStart:10


              }}
              underlineColor='transparent'
              outlineColor='transparent'
              activeOutlineColor='transparent'
              activeUnderlineColor='transparent'
              placeholder='Email '
            
              placeholderTextColor={'white'}
              left={
                <TextInput.Icon  icon={'email' } size={30} style={{paddingLeft:10}} color={'#ccc'} />
              }
              

              />
                <View style={{height: 25}} />
                <Input
                    
                    placeholder="Password"
                    endingAction={()=>setPasswordSecure(!passwordSecure)}
                    leadingIcon={require("../assets/login/key.png")}
                    endingIcon={require("../assets/login/view.png")}
                />
            </View>
            <Button title="Login to account" action={()=> RootNavigation.navigate("main")} />
            <View style={styles.accountActions}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <Text style={styles.accountActionText}>Forgot Password?</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <Text style={styles.accountActionText}>No Account Yet?</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
)}
       
        <View style={{
            bottom:200,
            width:'100%',
            display:'felx',
            justifyContent:'center',
            alignItems:'center',

        }} >
           


<SignInWithGoogleButton />

        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        borderWidth: 1,
        justifyContent: 'center', 
        alignContent: 'center',
    },
    backgroundImage: {},
    formContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 9,
        paddingHorizontal: '8%',
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 13,
        color: '#fff',
        textAlign: 'center',
    },
    inputsContainer: {
        paddingVertical: 30,
        width: '100%',
    },
    accountActions:{
        width: '100%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    accountActionText:{
        color: '#fff',
        fontSize: 13,
    },
});