import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native'


export default class FloatingActionButton extends Component {
    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        return (
            <View style={styles.container}>
                <Touchable onPress={this.props.action}>
                    <View style={styles.innerContainer}></View>
                </Touchable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        borderRadius: 50,
        position: "absolute",
        right: 16,
        bottom: 16 
    },
    innerContainer: {
        width: 56,
        height: 56,
        borderRadius: 50,
        backgroundColor: 'blue',
    }
});