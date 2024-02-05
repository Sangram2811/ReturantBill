import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Pressable, Linking } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import StarRating from 'react-native-star-rating';
import PhoneCall from '../../../Screens/ResturantScreen/PhoneCall';

export default function Info(props) {
    const {title, location, phone, rating, description, address,readMoreAction} = props;

    return <View>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.sectionTitle}>{location}</Text>
        <View style={styles.statsContainer}>
            <View style={styles.priceContainer}>
                <Text style={styles.sectionTitle}>Starting Price</Text>
               <View  style={{flexDirection:'row'}} >
               <PhoneCall phoneNumber={phone}/>
                <Pressable
                onPress={()=>{
                    const url=address
                    Linking.openURL(url)
                }}
                style={{
 width:40,
 flexDirection: 'row',
 alignItems: 'center',
 padding:10,
 borderRadius: 8,


                }} >
      <Icon name="map" color="#1a303d" size={20}/>
                    
                </Pressable>


               </View>
            </View>
            <View style={styles.ratingsContainer}>
                <View style={styles.ratingsWrapper}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={rating}
                        starSize={14}
                        fullStar="star"
                        emptyStar="star"
                        fullStarColor="#dbb16c"
                    />
                </View>
                <Text style={styles.sectionTitle}>{rating} Star Reviews</Text>
            </View>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.readMoreContainer}>
            <TouchableWithoutFeedback onPress={readMoreAction}>
                <Text style={styles.readMoreText}>Read More ...</Text>
            </TouchableWithoutFeedback>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    titleWrapper:{
        marginBottom: 5,
    },
    title:{
        fontSize: 33,
        lineHeight: 33,
        fontWeight: 'bold',
    },
    sectionTitle:{
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
    statsContainer:{
        paddingTop: 15,
        paddingBottom: 5,
        flexDirection: 'row',
        marginTop: 5,
    },
    priceContainer: {
        flex: 1,
    },
    priceTitle:{
        fontSize: 17,
        fontWeight: 'bold',
    },
    priceValue:{
        fontSize: 60,
        lineHeight: 70,
        color: '#dcb26a',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
    ratingsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingsWrapper: {
        width: 94,
    },
    description:{
        lineHeight: 22,
    },
    readMoreContainer:{
        paddingVertical: 15,
    },
    readMoreText:{
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
});