import React from "react";
import { Pressable, StatusBar, TouchableOpacity, View } from "react-native";
import { Avatar, Text, TextInput } from "react-native-paper";


const EditProfile=({route})=>{
    const user=route.params?.data || false
    return (
        <View style={{
            height:'100%',
            width:'100%',
            backgroundColor:'white'

        }} >
            <StatusBar

            backgroundColor={'white'}
            barStyle={'dark-content'}
            />

<View  style={{
    height:'30%',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',


}} >
    <Avatar.Image 

source={{uri:user.photoURL}}
size={150}




/>
<TouchableOpacity style={{
    marginTop:5
}} ><Text  

style={{
    color:'red'
}}
>Add Photo</Text></TouchableOpacity>

</View>


<View  style={{
    height:'40%',
    width:'100%',
    paddingHorizontal:20,
    paddingVertical:20
}} >
    <TextInput 
    value={user.displayName}
    label={'Name'}
textColor="#000000"
    style={{
        backgroundColor:'rgba(255,255,255,0)',
        marginTop:10
    }}
    />

<TextInput 
    value={user.phoneNumber==null ? '+91 ': user.phoneNumber}
    label={'Phone Number'}
textColor="#000000"
    style={{
        backgroundColor:'rgba(255,255,255,0)',


    }}

    />


    <TextInput 
    value={user.email}
    label={'Email'}
textColor="#000000"
    style={{
        backgroundColor:'rgba(255,255,255,0)',


    }}

    />


   <View
   style={{
    height:'20%',
    width:"100%",
    display:'flex',
    justifyContent:'center',
alignItems:'center',
marginTop:20
   }}
   >  

<Pressable 
    
    style={{
        width:150,
        height:40,
        backgroundColor:'#f27059',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:12
    }}
    >
        <Text  
    
        style={{
            color:'white'
        }}
        >Save</Text>
    </Pressable>


   </View>
 

   </View>



            </View>
    )
}
export default EditProfile;