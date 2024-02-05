import React from 'react';
import { View, Text, Image, StyleSheet,Pressable } from 'react-native';

const Card = (props) => {
    return (
        <Pressable
        key={props.id}
                
        onPress={() => {
          navigation.navigate('ResturantScreen', {
            resturantID: props.id,
            resturantName: props.name,
          });
        }}
        style={{padding: 10, width: 200}}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#ffffff',
             borderRadius: 12,
            flexDirection: 'row',
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
              source={{uri:props.image}}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 12,
              }}
            />
          </View>
        </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
    },
    card: {
        width: '50%%',
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
        display:"flex",
        alignItems:"center"
    },
    image: {
        width: 170,
        height: 104.67,
        borderRadius: 20,
    },
    title: {
        color: '#3D3D3D',
        fontSize: 16,
        fontFamily: 'DM Sans',
        fontWeight: '500',
        wordWrap: 'break-word',
        marginTop: 10,
    },
    location: {
        width: 185,
        color: '#3D3D3D',
        fontSize: 12,
        fontFamily: 'DM Sans',
        fontWeight: '400',
        lineHeight: 18.28,
        wordWrap: 'break-word',
        marginTop: 5,
    },
    rating: {
        width: 18,
        color: '#3D3D3D',
        fontSize: 12,
        fontFamily: 'DM Sans',
        fontWeight: '400',
        lineHeight: 18.28,
        wordWrap: 'break-word',
        marginTop: 5,
    },
    badge: {
        width: 18,
        height: 16.82,
        paddingLeft: 1.88,
        paddingRight: 1.88,
        paddingTop: 2.10,
        paddingBottom: 2.10,
        shadowColor: '#966E56',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: 5,
    },
    innerBadge: {
        width: 14.25,
        height: 12.62,
        position: 'relative',
    },
    colorBadge: {
        width: 14.25,
        height: 12.62,
        left: 0,
        top: 0,
        position: 'absolute',
        backgroundColor: '#FE554A',
    },
    line: {
        width: 1.44,
        height: 1.70,
        left: 10.12,
        top: 2.59,
        position: 'absolute',
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.70)',
        borderWidth: 1.5,
    },
});

export default Card;
