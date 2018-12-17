// Import a Library to help complete a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    //flex one makes it not bounce up on IOS
    //and on andoid allowed for the bottom button to be seen
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>

);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
