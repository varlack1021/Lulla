import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableWithoutFeedback } from "react-native";
import { Navigation } from "react-native-navigation";

export default class TodoAdditionScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex:1, backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
                <View style={{position:'absolute', left:16, top:16}}>
                    <TouchableWithoutFeedback onPress={() => { Navigation.pop(this.props.componentId) }}>
                            <Image source={require('../designs/cross.png')}/>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{marginLeft: 32, alignSelf: 'flex-end'}}>
                    <Text style={{fontSize:36, color:"#4A86E8", fontWeight:"bold"}}>
                        What are you trying to accomplish?
                    </Text>
                    <TextInput style={{borderBottomColor: "#4A86E8", borderBottomWidth: 4, color: "#4A86E8", fontSize: 21,  }} placeholder="Input Your Goal bro."/>
                </View>
            </View>
        );
    }
}