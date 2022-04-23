import React from 'react';
import { Image, StyleSheet} from 'react-native';

function AppImage({style, children}) {
    return (
        <Image style={[style]} source={children}/>
    );
}

export default AppImage;