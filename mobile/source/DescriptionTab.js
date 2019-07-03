import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableWithoutFeedback } from "react-native";
import { Navigation } from "react-native-navigation";
import ExtendedFloatingActionButton from "./shared_ui/components/ExtendedFloatingActionButton";

export default class DescriptionTab extends Component {
    constructor(props) {
        super(props);

        this._returnToMainScreen = this._returnToMainScreen.bind(this);
    }

    _returnToMainScreen() {
        Navigation.pop(this.props.componentId);
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
                        You wanna tell me more about this?
                    </Text>
                    <TextInput style={{borderBottomColor: "#4A86E8", borderBottomWidth: 4, color: "#4A86E8", fontSize: 21,  }} placeholder="Describe Your Goal bro."/>
                </View>
                <View style={{position:'absolute', right: 16, bottom: 16}}>
                    <ExtendedFloatingActionButton text="done" action={this._returnToMainScreen}/>
                </View>
            </View>
        );
    }
}