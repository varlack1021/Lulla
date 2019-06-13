import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SignitureScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex:1, backgroundColor:"red", justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:20, color:"white"}}>
                    Signiture Screen
                </Text>
            </View>
        );
    }
}