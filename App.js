import * as React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreens';
import GreetScreen from './Screens/GreetScreen';
import SignUp from './Screens/Auth/SignUp';
import SignIn from './Screens/Auth/SignIn';
import Dashboard from './Screens/Dashboard';
import ResturantScreen from './Screens/ResturantScreen';
import QRScannerPage from './Screens/QR/QRScanner';
import ScannedDataScreen from './Screens/QR/ScannedData';
import {PaperProvider} from 'react-native-paper';

import { DataProvider } from './src/hooks';
import Login from './test/screens/login';
import Booking from './test/screens/booking';
import Bookings from './test/Components/home/bookings';
import Location from './test/screens/demos/location';
import Bookmarks from './test/screens/demos/bookmarks';
import Account from './test/screens/demos/account';
import Settings from './test/screens/demos/settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './tabBar';
import { navigationRef } from './test/navigation/RootNavigation';
import Test2 from './test2';
import Home from './test/screens/home';
import QRScanner from './test/screens/QRScanner';
import AccountScreen from './test2/AccountScreen';
import PaymentsPage from './test2/PaymentsSave';
import LoginPage from './test/screens/LoginPage';

const Stack = createNativeStackNavigator();




function Main(){
  const Tab = createBottomTabNavigator();

  return <Tab.Navigator
      initialRouteName="Home" 
      tabBar={props => <TabBar {...props} />}
      sceneContainerStyle={{ backgroundColor: '#fff' }}
  >
      <Tab.Screen options={{headerShown:false}} name="home" component={Test2} />
      <Tab.Screen options={{headerShown:false}} name="search" component={Settings} />
      <Tab.Screen options={{headerShown:false}} name="pay" component={QRScanner} />
      <Tab.Screen options={{headerShown:false}}  name="Payments" component={PaymentsPage} />
      <Tab.Screen options={{headerShown:false}} name="account" component={AccountScreen} />
   
  </Tab.Navigator>;
}





const App = () => {
  return (    
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator initialRouteName="splashscreen">

      <Stack.Screen name="splashscreen" component={SplashScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false }}  />
      
      <Stack.Screen name="Home" component={Test2} options={{headerShown:false}} />
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }}  />
        <Stack.Screen name="booking" component={Booking} options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
      


        );
};

export {App,Main};


{/* <Stack.Screen
          name="SplashScreen"
          options={{headerShown: false, statusBarColor: '#f8fbff'}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="GreetScreen"
          options={{headerShown: false, statusBarColor: '#f8fbff'}}
          component={Bookings}
        />
         <Stack.Screen
          name="LoginTest"
          options={{headerShown: false,statusBarHidden:true}}
          component={Bookings}
        />
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUp}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="ResturantScreen"
          component={ResturantScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QRScannerPage"
          component={QRScannerPage}
          options={{
            headerTitle: 'Scan the QR Code',
          }}
        />
        <Stack.Screen
          name="ScannedDataScreen"
          options={{
            headerTitle: 'Pay',
            headerBackTitle: 'QR',
          }}
          component={ScannedDataScreen}
        />*/}