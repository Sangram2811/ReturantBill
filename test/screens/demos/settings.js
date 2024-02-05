import React from 'react'

import Placeholder from "../../Components/demo/Placeholder";
import { View } from 'react-native';
import Search from '../../Components/home/search';

export default function Settings() {
    return (
        <View  style={{
            height:'100%',
            width:'100%',
            backgroundColor:'#ccc'

        }} >
            <Search
             title="Search your desire "
             inputPlaceholder="Search the Resturants, cafes and events"
            />

        </View>
    );
}
