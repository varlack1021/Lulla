import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback, Platform, StyleSheet } from 'react-native';
import { Navigation } from "react-native-navigation";

export default class ExtendedFloatingActionButton extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.action}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{this.props.text.toUpperCase()}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 48,
        backgroundColor:"#6297EF",
        borderRadius: 24,
        alignItems:"center",
        justifyContent: "center",
        alignSelf:"flex-start",
        ...Platform.select({
            ios: {
                shadowRadius: 4,
                shadowOffset: { 
                    height: 6,
                    width: 0
                },
                shadowOpacity: 1, 
                shadowColor: "rgba(0,0,0,0.16)",

            },
            android: {
                elevation: 6
            }
        })
    },
    buttonText: {
        fontSize: 14,
        color:"#FFFFFF",
        marginLeft: 20,
        marginRight: 20
    }
});