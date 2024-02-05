import React from 'react';
import {View, Text, Pressable, Image, ScrollView, Linking} from 'react-native';
import RestaurantRating from './rating';
import PhoneCall from './PhoneCall';
import ImageModal from './ImageViewer';

const ResturantScreen = ({route, navigation}) => {
   const {resturantID, resturantName,location,resturantDescription,resturantMenu,resturantGallery,resturantNumber,resturantRating,resturantImage   } = route.params;
  const openPdfInExternalViewer = yourPdfUrl => {
    Linking.openURL(yourPdfUrl).catch(error => {
      console.error('Error opening PDF:', error);
    });
  };

  //  if (resturantID == '') {
  //     navigation.goBack();
  //   }

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#f2f3f7',
      }}>
      <View
        style={{
          height: '12%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: '10%',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            // zIndex: '10',
            height: '85%',
            width: '14%',
            marginStart: '2%',
             borderRadius:20,
            padding: '4%',
            flexShrink: 0,
          }}>
          <Image
            style={{
              height: '90%',
              width: '90%',
            }}
            source={{
              uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-6.png',
            }}
          />
        </Pressable>

        <View
          style={{
            // zIndex: '0',
            position: 'absolute',
            top: '80%',
            height: '50%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'black'}}>
         {resturantName ? resturantName : 'Loading'}
          </Text>
        </View>
      </View>

      <View
        style={{
          height: '25%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '80%',
            width: '80%',
            backgroundColor: 'gray',
            borderRadius:10,
          }}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              borderRadius:10,
            }}
            source={{uri:resturantImage ? resturantImage : 'https://placehold.co/600x400/EEE/31343C'}} 
          />
        </View>
      </View>
      <View
        style={{
          height: '8%', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: '700',
          }}>
          {resturantName ? resturantName : "Loading"}
        </Text>
      </View>
      <View
        style={{
          height: '10%',
          flexDirection: 'row',
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingStart: '10%',
          paddingEnd: '20%',
        }}>
        <RestaurantRating rating={resturantRating} />
        <Pressable
        style={{
          height:40,
          width:40,
          borderRadius:10,
          padding:1,
          backgroundColor:'#EFEFF4'
        }}
        onPress={()=>{
          
          Linking.openURL(location)
          
        }}
        >
<Image style={{
  height:'100%',
  width:'100%',

}}

source={{uri:'https://cdn.iconscout.com/icon/free/png-512/free-google-maps-2981836-2476488.png?f=webp&w=256'}}
  />

        </Pressable>
        <PhoneCall phoneNumber={resturantNumber} />
      </View>
      <View
        style={{
          height: '20%',
          paddingBottom: '10%',
          paddingHorizontal: '10%',
        }}>
        <Text>{resturantDescription ? resturantDescription :"Our simple, classic cheeseburger begins with a 100% pure beef burger seasoned with just a pinch of salt and pepper. The McDonald’s Cheeseburger is topped,"
          
        }<Text
            onPress={() => {}}
            style={{
              color: 'red',
            }}>
            more
          </Text>
        </Text>
        <View
          style={{
            height: 40,
            marginTop: '20%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}>
          <Pressable
            style={{
              height: '100%',
              width: '50%',
              backgroundColor: 'red',
              borderRadius:5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              onPress={() => {
                const pdf =resturantMenu;

                openPdfInExternalViewer(pdf);
              }}
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Menu
            </Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          height: '25%',
        }}>
        <View
          style={{
            height: '20%',
            paddingStart: '10%',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
            }}>
            Gallery
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ImageModal
            imageUrl={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIj-jSI83TdFjowFrjNDibsg8M0NBl74v9TJ9tITHDWF3dGCQ'
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ResturantScreen;
