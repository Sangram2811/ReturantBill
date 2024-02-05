import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import QRScanner from '../../screens/QRScanner';
import QRScannerPage from '../../../Screens/QR/QRScanner';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function Placeholder(props) {
    const {title, source, size = 250} = props;

    return <View style={styles.container}>
       <Image source={source} size={size}/>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        marginTop: 30,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#1a303d',
    },
});