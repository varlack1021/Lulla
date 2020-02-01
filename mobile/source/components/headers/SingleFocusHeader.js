import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';

export default function SingleFocusHeader({focusLogo, focusName, headerTitle, style}) {
    return(
        <View style={[styles.container, style]}>
            <Image 
                source={focusLogo}
                style={[styles.focusLogo]}/>
            <View style={[styles.subContainer]}>
                <Text style={[styles.focusText]}>{focusName}</Text>
                <Text style={[styles.headerText]}>{headerTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    subContainer: {
        marginLeft: 8
    },
    focusText: {
        fontFamily: 'Raleway-Italic',
        fontSize: 16
    },
    focusLogo: {
        aspectRatio: 1,
        resizeMode: 'contain',
        width: 80
    },
    headerText: {
        fontFamily: 'Raleway-Bold',
        fontSize: 48
    }
});