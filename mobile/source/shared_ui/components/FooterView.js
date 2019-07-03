import React, { Component } from "react";
import { Text, TouchableHighlight ,StyleSheet, Alert } from "react-native";
import { Navigation } from "react-native-navigation";

import SignitureScreen from "../../SignitureScreen.js";

export default class FooterView extends Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    _onClick(event) {
        Navigation.push(this.props.componentId, {
            component: {
                name: "SigniturePage"
            }
        })
    }

    render() {
        return(
            <TouchableHighlight onPress={this._onClick} activeOpacity={1} underlayColor='rgba(247, 247, 247,1)'>
                <Text style={styles.footerText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    footerText: {
        alignSelf: "center",
        fontWeight: "100",
        fontSize: 20,
        color: "#4A86E8",
        textDecorationLine: "underline"        
    }
});