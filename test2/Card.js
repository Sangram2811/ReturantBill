import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import RestaurantRating from '../Screens/ResturantScreen/rating';

const HotelCard = ({ hotel, onPress }) => {
  const [rating,setrating]=useState(0)
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
  return (
    <TouchableOpacity key={hotel._id} style={styles.cardContainer} onPress={onPress}>
      <Image source={{ uri: hotel.mainImage }} style={styles.cardImage} />
      <View style={styles.offerContainer}>
        <Text style={styles.offerText}>{hotel.offers}</Text>
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <Text style={styles.location}>{hotel.address}</Text>
        <Text style={styles.price}>

        <RestaurantRating  rating={averagereview(hotel.reviews)} />

        </Text>
        <TouchableOpacity style={styles.bookButton} onPress={onPress}>
          <Text style={styles.bookButtonText}>Get Deal</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 20,
    backgroundColor: '#fff',
    elevation: 5,
  },
  cardImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  offerContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#e74c3c',
    padding: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  offerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardDetails: {
    padding: 15,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HotelCard;
