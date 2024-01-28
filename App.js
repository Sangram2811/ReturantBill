import * as React from 'react';
import {View, Text, Image} from 'react-native';
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
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            options={{headerShown: false, statusBarColor: '#f8fbff'}}
            component={SplashScreen}
          />
          <Stack.Screen
            name="GreetScreen"
            options={{headerShown: false, statusBarColor: '#f8fbff'}}
            component={GreetScreen}
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
          {/* <Stack.Screen
            name="ScannedDataScreen"
            options={{
              headerTitle: 'Pay',
              headerBackTitle: 'QR',
            }}
            component={ScannedDataScreen}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
