import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import FloatingActionButton from '../components/FloatingActionButton';
import CancelButton from "../components/CancelButton";

// TODO: Remove the FloatingActionButton
// TODO: Make Components Handle the aesthetic
// TODO: do View Reduction on this Component
export default class WhatScreen extends Component{
    render() {
        return(
            <View style={ styles.screen } >
            <View style={{
          flex: 1,
          width: 40,
          height: 40,
          alignSelf: 'flex-start',
          left: 16,
          top: 16,
          position: 'absolute',
          backgroundColor: 'rgb(255,255,255)'
        }} />
                <CancelButton style={ styles.cancelButtonPositioning } action={ () => { this.props.navigation.navigate('MainScreen') } }/>
                <View>
                    <Text style={ styles.demoText }>This the What tab</Text>
                    <TextInput placeholder="What's your goal?" style={{width: "100%"}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(121,212,65)'
    },
    contentContainer:{
        
    },
    demoText: {
        fontSize: 36
    },
    cancelButtonPositioning: {
        flex: 1,
        width: 40,
        height: 40,
        backgroundColor: 'rgb(255,255,255)',
        position: 'absolute',
        alignSelf: 'flex-start',
        top: 16,
        left: 16,
    }
});