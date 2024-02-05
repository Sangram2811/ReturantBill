// Import necessary components from React Native
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RestaurantRating from '../../../Screens/ResturantScreen/rating';

// Create the ReviewCard component
const ReviewCard = ({ title, rating, review, image }) => {
  return (
    <View style={styles.card}>
      <Image source={require('../../../Assets/user.png')} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <RestaurantRating rating={rating} />
        <Text style={styles.review}>{review}</Text>
      </View>
    </View>
  );
};

// Define the styles for the ReviewCard
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
borderBottomWidth:1,
borderTopWidth:0,
borderColor:'#ccc'

   
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
  },
  review: {
    fontSize: 16,
  },
});

// Export the ReviewCard component
export default ReviewCard;
