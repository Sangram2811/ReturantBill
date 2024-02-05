import React,{useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  View,
  DrawerLayoutAndroid,
  Alert,
} from 'react-native';
import {Avatar, Text, Button, Icon, TextInput} from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
import Card from './Card';
import axios from 'axios';
const Dashboard = ({navigation}) => {
const [merchants,setmerchants]=useState([])
const [events,setevents]=useState([])
const [cafes,setcafes]=useState([])
const [resturants,setresturants]=useState([])
useEffect(()=>{
const fetchmerchants=async()=>{
  await axios.get('https://resturant.techarman.me/api/merchants')
  .then((res)=>{
    setmerchants(res.data.data[0])
    const data=res.data.data[0];
    const fevents = data.filter(merchant => merchant.category === "Events");
   const fcafes=data.filter(merchants=>merchants.category ==="Cafes" )
   const fresturants=data.filter(merchants=>merchants.category ==="Resturants" )
    setresturants(fresturants)
    setcafes(fcafes)
    setevents(fevents)
  })
  .catch((err)=>{
    Alert.alert(err)
  })

}
fetchmerchants()
},[])

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#f8fbff',
      }}>
      <View
        style={{
          height: '15%',
          backgroundColor: '#f8fbff',
        }}>
  

        <View
          style={{
            backgroundColor: '#f8fbff',
            height: '50%',
            marginTop: '10%',
            display: 'felx',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Pressable
            onPressIn={() => {}}
            id="account"
            onLongPress={() => {}}
            style={{
              height: '85%',
              width: '14%',
              backgroundColor: '#ffffff',
              marginStart: '80%',
              borderRadius: 20,
              elevation:10,
              shadowColor: 'rgba(150, 110, 86, 0.20)',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: '1',
              flexShrink: 0,
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../../Assets/user.png')}
            />
          </Pressable>

          <Pressable
            onPressIn={() => {}}
            onLongPress={() => {}}
            style={{
              position: 'absolute',
              backgroundColor:'#f8fbff',
              height: '85%',
              width: '14%',
                 borderRadius: 12,
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderRadius:12
              }}
              source={require('../../Assets/logo.png')}
            />
          </Pressable>
          <TextInput
          style={{
            position:'absolute',
            top:0,
            left:80,
            width:200,
            height:50,
            borderTopStartRadius:50,
            borderTopEndRadius:50,
            borderBottomEndRadius:50,
            borderBottomStartRadius:50,
            paddingStart:10,
            backgroundColor:'#f8fbff',
            borderWidth:1,
            borderColor:"#808080"

            

          }}
          placeholder=' Search Here'
activeOutlineColor='transparent'
activeUnderlineColor='transparent'
underlineColor='transparent'

          />
        </View>
      </View>

      <ScrollView
        style={{
          flex: 1,
          marginBottom: '33%',
        }}
        scrollEnabled={true}>
        <View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 200,
                width: '90%',
                borderRadius: 10,
                padding: 3,
              }}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                     borderRadius: 10,
                }}
                source={require('../../Assets/banner.jpeg')}
              />
            </View>
          </View>

          <View
            style={{
              height: '10%',
              paddingStart: '10%',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                color: '#3D3D3D',
                fontWeight: '700',
              }}>
              Events
            </Text>
          </View>

          <View
            style={{
              padding: '1%',
              height: 250,
              paddingStart: '5%',
            }}>
           
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {events.map((data, index) => (
                <Pressable onPress={()=>{
                  const main={
                    resturantID:data._id,
                    resturantName:data.name,
                    resturantDescription:data.description,
                    resturantMenu:data.menuLink,
                    resturantNumber:data.phoneNumber,
                    resturantRating:data.rating,
                    resturantImage:data.mainImage,
                    location:data.address


                  }
                 const {resturantID,location, resturantName,resturantDescription,resturantMenu,resturantNumber,resturantRating,resturantImage}=main;
               navigation.navigate('ResturantScreen',{
                resturantName,
                resturantID
                ,
                resturantDescription,
                resturantMenu,
                resturantNumber,
                resturantRating,
                resturantImage,
                location

               })
               }} key={data._id} style={{ padding: 10, width: 200 }}>
                  <View
                    style={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: '#ffffff',
                      borderRadius: 12,
                      flexDirection: 'column', // Change to column to stack items vertically
                      justifyContent: 'space-around',
                      padding: '10%',
                    }}>
                    <View
                      style={{
                        height: '50%',
                        width: '100%',
                        borderRadius: 12,
                      }}>
                      {/* Event Image */}
                      <Image
                      key={index}
                        source={{uri:data.mainImage}} // Assuming there's an imageURI property in your events data
                        style={{
                          height: '100%',
                          width: '100%',
                          borderRadius: 12,
                        }}
                      />
                    </View>
                    {/* Restaurant Name */}
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.name}</Text>
                    {/* Location */}
                    <Text style={{ fontSize: 14, color: 'gray' }}>{data.address}</Text>
                  </View>
                </Pressable>
              ))}
            
            </ScrollView>
         
          </View>
        </View>
        <View
          style={{
            height: 300,
          }}>
          <View
            style={{
              height: '15%',
              paddingStart: '10%',
              display: 'flex',

              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                color: '#3D3D3D',
                fontWeight: '700',
              }}>
              Resturants
            </Text>
          </View>

          <View
            style={{
              padding: '1%',
              height: 250,
              paddingStart: '5%',
            }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {resturants.map((data, index) => (
                <Pressable 
                
                onPress={()=>{
                  const main={
                    resturantID:data._id,
                    resturantName:data.name,
                    resturantDescription:data.description,
                    resturantMenu:data.menuLink,
                    resturantNumber:data.phoneNumber,
                    resturantRating:data.rating,
                    resturantImage:data.mainImage,
                    location:data.address



                  }
                 const {resturantID,location, resturantName,resturantDescription,resturantMenu,resturantNumber,resturantRating,resturantImage}=main;
               navigation.navigate('ResturantScreen',{
                resturantName,
                resturantID
                ,
                resturantDescription,
                resturantMenu,
                resturantNumber,
                resturantRating,
                resturantImage,
                location

               })
               }}
                
                key={index} style={{ padding: 10, width: 200 }}>
                  <View
                    style={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: '#ffffff',
                      borderRadius: 12,
                      flexDirection: 'column', // Change to column to stack items vertically
                      justifyContent: 'space-around',
                      padding: '10%',
                    }}>
                    <View
                      style={{
                        height: '50%',
                        width: '100%',
                        borderRadius: 12,
                      }}>
                      {/* Event Image */}
                      <Image
                        source={{uri:data.mainImage}} // Assuming there's an imageURI property in your events data
                        style={{
                          height: '100%',
                          width: '100%',
                          borderRadius: 12,
                        }}
                      />
                    </View>
                    {/* Restaurant Name */}
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.name}</Text>
                    {/* Location */}
                    <Text style={{ fontSize: 14, color: 'gray' }}>{data.address}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            height: 300,
          }}>
          <View
            style={{
              height: '15%',
              paddingStart: '10%',
              display: 'flex',

              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                color: '#3D3D3D',
                fontWeight: '700',
              }}>
              Cafes
            </Text>
          </View>

          <View
            style={{
              padding: '1%',
              height: 250,
              paddingStart: '5%',
            }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cafes.map((data, index) => (
                <Pressable 
                
                onPress={()=>{
                  const main={
                    resturantID:data._id,
                    resturantName:data.name,
                    resturantDescription:data.description,
                    resturantMenu:data.menuLink,
                    resturantNumber:data.phoneNumber,
                    resturantRating:data.rating,
                    resturantImage:data.mainImage,
                    location:data.address



                  }
                 const {resturantID, location,resturantName,resturantDescription,resturantMenu,resturantNumber,resturantRating,resturantImage}=main;
               navigation.navigate('ResturantScreen',{
                resturantName,
                resturantID
                ,
                resturantDescription,
                resturantMenu,
                resturantNumber,
                resturantRating,
                resturantImage,
location
               })
               }}
                
                key={index} style={{ padding: 10, width: 200 }}>
                  <View
                    style={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: '#ffffff',
                      borderRadius: 12,
                      flexDirection: 'column', // Change to column to stack items vertically
                      justifyContent: 'space-around',
                      padding: '10%',
                    }}>
                    <View
                      style={{
                        height: '50%',
                        width: '100%',
                        borderRadius: 12,
                      }}>
                      {/* Event Image */}
                      <Image
                        source={{uri:data.mainImage}} // Assuming there's an imageURI property in your events data
                        style={{
                          height: '100%',
                          width: '100%',
                          borderRadius: 12,
                        }}
                      />
                    </View>
                    {/* Restaurant Name */}
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.name}</Text>
                    {/* Location */}
                    <Text style={{ fontSize: 14, color: 'gray' }}>{data.address}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
        


      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '12%',
          backgroundColor: '#ffffff',
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('QRScannerPage');
          }}
          style={{
            height: 80,
            width: 80,
            position: 'absolute',
            bottom: 60,
            left: '40%',
            backgroundColor: 'red',
           borderRadius: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: '40%',
              width: '40%',

            }}
            source={require('../../Assets/Search.png')}
          />
        </Pressable>

      </View>
    </View>
  );
};

export default Dashboard;
