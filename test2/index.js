import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Animated, Alert } from 'react-native';
import { Main } from '../App';
import Carousel from "react-native-snap-carousel";
import HotelCard from './Card';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Define your data (dummy data for demonstration)
const restaurantData = [
  { name: 'Restaurant 1', location: 'Location 1',Offer:"20%", rating: 4.5, image: require('../test/assets/home/bookings/booking-1.png') },
  { name: 'Restaurant 2', location: 'Location 2',Offer:"20%", rating: 4.0, image: require('../test/assets/home/bookings/booking-1.png') },
  // Add more restaurant data as needed
];

const cafeData = [
  { name: 'Cafe 1', location: 'Location 1', Offer:"20%",rating: 4.2, image: require('../test/assets/home/bookings/booking-1.png') },
  { name: 'Cafe 2', location: 'Location 2',Offer:"20%", rating: 4.8, image: require('../test/assets/home/bookings/booking-1.png') },
  // Add more cafe data as needed
];

const eventData = [
  { name: 'Event 1', location: 'Location 1', Offer:"20%",rating: 4.7, image: require('../test/assets/home/bookings/booking-1.png') },
  { name: 'Event 2', location: 'Location 2',Offer:"20%", rating: 4.3, image: require('../test/assets/home/bookings/booking-1.png') },
  // Add more event data as 
  
];

const newdata=[
   { "_id": "65b79fab0e9a3a43a42409e6",
    "name": "Cafe de Espana",
    "category": "Resturants",
    "description": "This is sample description",
    "phoneNumber": 9330158525,
    "address": "Salt Lake,Kolkata,India,700036",
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/resturantbill-be5a4.appspot.com/o/Arman%20Mondal%2FMainImage.jpg?alt=media&token=15a40d04-020a-4fbe-98d7-cedc43378d9d",
    "galleryImages": [],
    "menuLink": "https://firebasestorage.googleapis.com/v0/b/resturantbill-be5a4.appspot.com/o/Arman%20Mondal%2FMenu.pdf?alt=media&token=44f16b31-fb46-4fb0-86ac-f83446506645",
    "rating": 5,
    offer:'50%',
    "__v": 0
},
{ "_id": "65b79fab0e9a3a43a42409e6",
"name": "Cafe Down Town",
"category": "Cafes",
"description": "This is sample description",
"phoneNumber": 9330158525,
"address": "Kolkata,India",
"mainImage": "https://firebasestorage.googleapis.com/v0/b/resturantbill-be5a4.appspot.com/o/Arman%20Mondal%2FMainImage.jpg?alt=media&token=15a40d04-020a-4fbe-98d7-cedc43378d9d",
"galleryImages": [],
"menuLink": "https://firebasestorage.googleapis.com/v0/b/resturantbill-be5a4.appspot.com/o/Arman%20Mondal%2FMenu.pdf?alt=media&token=44f16b31-fb46-4fb0-86ac-f83446506645",
"rating": 2,
offer:'50%',
"__v": 0
},

]
const sampleHotelData = [
    {
      id: '1',
      name: 'Luxury Resort',
      location: 'Paradise Island, Bahamas',
      price: 300,
      offer:'40%', 
           image: 'https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwcmVzb3J0fGVufDB8fDB8fHww',
    },
    {
      id: '2',
      name: 'Beachfront Hotel',
      location: 'Maui, Hawaii',
      price: 250,
      offer:'50%',
      image: 'https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwcmVzb3J0fGVufDB8fDB8fHww',
    },
    {
      id: '3',
      name: 'Mountain Retreat',
      location: 'Aspen, Colorado',
offer:'20%',
      price: 200,
      image: 'https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwcmVzb3J0fGVufDB8fDB8fHww',
    },
  ];
  


const bannerData=[
    {id:1,image:require('../Assets/banner.jpeg')},
    {id:2,image:require('../test/assets/home/bookings/booking-1.png')}
]

const TabContent = ({ data }) => (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.Offer}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.rating}>Rating: {item.rating}</Text>
          </View>
        </View>
      )}
    />
  );
// Card component to display data
const Card = ({ name, location, rating, image,Offer }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{Offer}</Text>
    </View>
    <View style={styles.details}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
    </View>
  </View>
);

const Test2 = ({navigation}) => {
    const [activeTab, setActiveTab] = useState('restaurants');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const renderCarouselItem = ({ item }) => (
        <HotelCard key={item._id} hotel={item} onPress={() => toggleDrawer(item._id)} />
      );
const [resturants,setResturants]=useState([])
const [cafes,setcafes]=useState([])
const [events,setevents]=useState([])
      useEffect(()=>{
        
    const fetchmerchantdata=async()=>
    {const response=await axios.get('https://resturant.techarman.me/api/merchants');
    if(response.data.status===true){
      console.log(response.data)
      const merchants=response.data.stores;
      const restaurantsfilter=merchants.filter(restaurant=>restaurant.category=="Restaurants")
      setResturants(restaurantsfilter)
      const cafesfilter=merchants.filter(cafes=>cafes.category=="Cafes")
      setcafes(cafesfilter)
      const eventsfilter=merchants.filter(events=>events.category=="Events")
      setevents(eventsfilter)


    }
    if(response.data.status===false){
      Alert.alert("No Data")
    }
      

    }

    fetchmerchantdata()


      },[])
    
    const toggleDrawer = (id) => {
      console.log(id)
    };
    function getGreeting() {
      // Get the current hour
      const currentHour = new Date().getHours();
  
      // Define the greeting messages
      let greeting;
  
      if (currentHour >= 5 && currentHour < 12) {
          greeting = 'Good Morning';
      } else if (currentHour >= 12 && currentHour < 18) {
          greeting = 'Good Afternoon';
      } else {
          greeting = 'Good Evening';
      }
  
      return greeting;
  }
  
  // Example usage:
 
    return (
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          {/* Avatar */}
          <Text style={{
            position:'absolute',
            fontSize:30,
            fontStyle:'normal',
            top:20,
            left:20,
            color:'#000000'
          }}>{getGreeting()}</Text>
          <Image 
          source={require('../Assets/logo.png')}
          style={styles.avatar}>
          </Image>
          {/* Search Input */}
         
        </View>
  
        {/* Banner */}
       
  <View style={styles.tabsec} >

        <View style={styles.tabButtons}>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'restaurants' && styles.activeTab]} onPress={() => setActiveTab('restaurants')}>
            <Text  style={[activeTab==="restaurants"&& {color:'red'}]}  >Restaurants</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'cafes' && styles.activeTab]} onPress={() => setActiveTab('cafes')}>
            <Text   style={[activeTab==="cafes"&& {color:'red'}]} >Cafes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'events' && styles.activeTab]} onPress={() => setActiveTab('events')}>
            <Text style={[activeTab==="events"&& {color:'red'}]} >Events</Text>
          </TouchableOpacity>
        </View>
  
        <View>
            <ScrollView    style={{
            }}  >

     {activeTab=='restaurants' && resturants.map(item=>(
        <HotelCard
        onPress={()=>{
          navigation.navigate('booking',{item})
          
          }}

        hotel={item}
        />
        
       )) }
{activeTab=='cafes' &&  cafes.map(item=>(
        <HotelCard

onPress={()=>{
navigation.navigate('booking',{item})

}}
        hotel={item}
        />
        
       )) }
       {activeTab=='events' && events.map(item=>(
        <HotelCard
        onPress={()=>{
          navigation.navigate('booking',{item})
          
          }}

        hotel={item}
        
        />
        
       )) }

       <View  
       
       style={{
        height:400,
        width:'100%'
       }}
       ></View>

            </ScrollView>

  
     
        </View>
  </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      height:'100%',
      width:'100%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding:10,
      alignContent:'center',
      height:80
      


    },avatar: {
        width: 40,
        height: 40,
        backgroundColor: '#f27059',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        top:20,
        right:20


      },
      search: {
        flex: 1,
        marginLeft: 10,
        borderRadius: 20,
        marginBottom:5,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      searchInput: {
        flex: 1,
        paddingVertical: 8,
        paddingLeft: 5,
        fontSize: 16,
      },
    bannerinside:{
        borderRadius:20,
        height: 200,
        width:'90%',
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        marginTop:10,
        marginBottom:10,
      height: 200,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      display:'flex'
    },
    tabButtons: {
       backgroundColor:'white',
       borderTopEndRadius:20,
       borderTopStartRadius:20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      color:'red',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    tabButton: {
      padding: 10,
      color:'red'
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: 'red',
    },
    card: {
      width: 200,
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 15,
      height:'50%',
      padding: 10,
    },
    tabsec:{
        backgroundColor:'white',
        borderTopEndRadius:20,
        borderTopStartRadius:20,
        
    },
    cardImage: {
      width: '100%',
      height: 100,
      borderRadius: 5,
      marginBottom: 5,
    },
  });
  export default Test2;


  {/*

{activeTab === 'restaurants' && sampleHotelData.map(restaurant => (
))}
          {activeTab === 'cafes' && sampleHotelData.map(cafe => (
          <HotelCard key={cafe.id} hotel={cafe}/>
          ))}
          {activeTab === 'events' && sampleHotelData.map(event => (
          <HotelCard
          key={event.id}
          hotel={event}

          />
          ))}

*/ }