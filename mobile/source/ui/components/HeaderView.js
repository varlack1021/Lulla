import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class HeaderView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={styles.headerText}>{this.props.text}</Text>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 48,
        color: "#000000",
        textDecorationLine: "underline",
        backgroundColor: "#FFFFFF"
        //marginBottom: 
    }
});