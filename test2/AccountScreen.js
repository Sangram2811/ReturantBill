import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import auth from "@react-native-firebase/auth"
const AccountScreen = ({navigation}) => {
  const [user,setuser]=useState({})
  const logout=()=>{
    
  }
  useEffect(()=>{
    const data=auth().currentUser
    setuser(data)
    console.log(user)

  },[])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={user.photoURL ? {uri:user.photoURL} : require('../Assets/user.png')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{user.displayName ? user.displayName : 'John Doe'}</Text>
        <Text style={styles.email}>{user.email ? user.email : 'example@email.com'}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option} onPress={()=>{
navigation.navigate('editprofile',{data:user})
        }} >
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  options: {
    marginTop: 20,
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 18,
  },
});

export default AccountScreen;
