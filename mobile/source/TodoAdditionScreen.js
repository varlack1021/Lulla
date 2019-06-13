import React, { Component } from "react";
import { View, Text } from "react-native";

export default class TodoAdditionScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex:1, backgroundColor:"#4A86E8", justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:20, color:"white"}}>
                    Todo Addition Tab
                </Text>
            </View>
        );
    }
}