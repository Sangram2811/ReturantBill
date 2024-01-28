import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  View,
  DrawerLayoutAndroid,
} from 'react-native';
import {Avatar, Text, Button, Icon} from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
import Card from './Card';
const Dashboard = ({navigation}) => {
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
              //   borderRadius: '20%',
              // elevation:'10',
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
              height: '85%',
              width: '14%',
              //   borderRadius: '20%',
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../../Assets/drawer.png')}
            />
          </Pressable>
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
                // borderRadius: 10,
                padding: 3,
              }}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  //   borderRadius: 10,
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
              <Pressable
                onPress={() => {
                  navigation.navigate('ResturantScreen', {
                    resturantID: '1',
                    resturantName: 'PUB 97',
                  });
                }}
                style={{padding: 10, width: 200}}>
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#ffffff',
                    // borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: '10%',
                  }}>
                  <View
                    style={{
                      height: '50%',
                      width: '100%',
                      //   borderRadius: 12,
                    }}>
                    {/* Event Image */}
                    <Image
                      source={require('../../Assets/banner.jpeg')}
                      style={{
                        height: '100%',
                        width: '100%',
                        // borderRadius: 12,
                      }}
                    />
                  </View>
                </View>
              </Pressable>

              <View style={{padding: 10, width: 200}}>
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#ffffff',
                    // borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: '10%',
                  }}>
                  <View
                    style={{
                      height: '50%',
                      width: '100%',
                      //   borderRadius: 12,
                    }}>
                    {/* Event Image */}
                    <Image
                      source={require('../../Assets/banner.jpeg')}
                      style={{
                        height: '100%',
                        width: '100%',
                        // borderRadius: 12,
                      }}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            height: 250,
          }}>
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
              <View style={{padding: 10, width: 200}}>
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#ffffff',
                    // borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: '10%',
                  }}>
                  <View
                    style={{
                      height: '50%',
                      width: '100%',
                      //   borderRadius: 12,
                    }}>
                    {/* Event Image */}
                    <Image
                      source={require('../../Assets/banner.jpeg')}
                      style={{
                        height: '100%',
                        width: '100%',
                        // borderRadius: 12,
                      }}
                    />
                  </View>
                </View>
              </View>
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
          height: '15%',
          backgroundColor: '#ffffff',
          borderTopStartRadius: 15,
          borderTopEndRadius: 15,
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('QRScannerPage');
          }}
          style={{
            height: 80,
            width: 80,
            position: 'absolute',
            bottom: 80,
            left: '40%',
            backgroundColor: 'red',
            // borderRadius: 100,
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
