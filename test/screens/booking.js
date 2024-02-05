import React from 'react';
import { 
    View, 
    Dimensions, 
    StyleSheet, 
    SafeAreaView,
    ScrollView, 
} from 'react-native';

import * as RootNavigation from '../navigation/RootNavigation';

import TopBar from '../Components/booking/TopBar';
import Facility from '../Components/booking/Facility';
import BookHotel from '../Components/booking/BookHotel';
import Gallery from '../Components/booking/Gallery';
import Info from '../Components/booking/Info';
import { Text } from 'react-native-paper';
import ReviewCard from '../Components/booking/reviewCard';
import Carousel from "react-native-snap-carousel"
import { RevealFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
const {height} =  Dimensions.get('screen');


function Booking({route}) {
    const receivedData = route.params?.item;
console.log(receivedData)

function averagereview(data){
    try{
     if(data.length>0){
          // Assuming you have an array of reviews
   const reviews = data;
   
   // Calculate the average rating
   let totalRating = 0;
   reviews.forEach(review => {
     totalRating += review.rating;
   });
   
   const averageRating = totalRating / reviews.length;
   return averageRating
     }
     else{
       return 0
     }
   
   
   
   
    }
    catch(err){
   
    }
     }


    return <SafeAreaView >
        <ScrollView >

        <View style={styles.bookingHead}>
            <TopBar leadingAction={()=>RootNavigation.pop()} />
           <Carousel 
           data={receivedData.gallery}
           sliderWidth={500}
           itemWidth={500}
           loop
           autoplay
           autoplayInterval={3000}
           renderItem={
            ({item})=>(
                <Gallery image={{uri:item.image}}/>

            )
           }
           />
        </View>
        <View style={styles.bookingInfo}>
            <Info
                title={receivedData.name} 
                location={receivedData.address}
               phone={receivedData.phone}
               address={receivedData.address}
                rating={averagereview(receivedData.reviews)}
                description={receivedData.description}
                readMoreAction={()=>{}}
            />
        </View>

        <View style={styles.ratingcontainer} >
            <Text style={{
                paddingStart:20,
                fontSize:30,
                fontStyle:'normal',
                fontWeight:'bold',
                backgroundColor:'white'

            }}>Reviews</Text>
            {receivedData.reviews.length>0 && receivedData.reviews.map((item)=>(

            <ReviewCard
            title="Awesome Product"
            rating={item.rating}
            review={item.text}
            image="https://example.com/product-image.jpg"
          />
            ))}
        </View>

        </ScrollView>
    </SafeAreaView>;
}

export default Booking;

const topSectionHeight = height / 1.9;

const styles = StyleSheet.create({
    bookingHead: {
        height: topSectionHeight,
    },
    ratingcontainer:{
        
        width:'100%',
        height:300,
        backgroundColor:'white'

        



    },
    bookingInfo:{
        zIndex: 2,
        marginTop: -120,
        height: height/2.4,
        backgroundColor: '#fff',
        paddingVertical: '8%',

        paddingHorizontal: '10%',
    },
    bookingFooter: {
        zIndex: 2,
        marginTop: -30,
        height: height/4.4,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: '8%',
        paddingHorizontal: '10%',
        backgroundColor: '#1a2f3b',
    },
    facilitiesContainer: {
        flexDirection: 'row',
        marginBottom: 25,
    },
});