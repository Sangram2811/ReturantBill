// RestaurantRating.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantRating = ({ rating }) => {
const rate=Number(rating) 
  const renderStars = () => {
    const fullStars = Math.floor(rate);
    const halfStar = rating % 1 !== 0;

    const starsArray = [];

    for (let i = 0; i < fullStars; i++) {
      starsArray.push(
        <Text key={i} style={styles.star}>
          ★
        </Text>
      );
    }

    if (halfStar) {
      starsArray.push(
        <Text key="half" style={styles.star}>
          ★
        </Text>
      );
    }

    return starsArray;
  };

  return (
    <View style={styles.container}>
      {renderStars()}
      <Text style={styles.ratingText}>{rate.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: 'gold',
    fontSize: 20,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RestaurantRating;
