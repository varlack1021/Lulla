import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FloatingActionButton from '../elements/FloatingActionButton';


// TODO: Remove the FloatingActionButton 
export default class WhatScreen extends Component{
    render() {
        return(
            <View style={styles.demoContainer}>
                <Text style={ styles.demoText }>This the What tab</Text>
                <FloatingActionButton action={ () => { this.props.navigation.navigate('MainScreen') } } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    demoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    demoText: {
        fontSize: 36
    }
});