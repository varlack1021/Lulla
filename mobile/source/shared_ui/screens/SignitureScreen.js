import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SignitureScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex:1, backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:25, color:"purple"}}>
                    Dreamy Jy🕺🏿 and the crew
                </Text>
            </View>
        );
    }
}