import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class StepsScreen extends Component{
    render() {
        return(
            <View style={styles.demoContainer}>
                <Text style={ styles.demoText }>This the Steps tab</Text>
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