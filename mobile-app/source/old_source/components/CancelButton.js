import React, { Component } from "react";
import {  View, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as values from "../constants";

export default class CancelButton extends Component{
    render() {
        return(
            <View>
                <TouchableWithoutFeedback onPress={ this.props.action }>
                    <FontAwesome name={values.CANCEL_ICON} size={values.CANCEL_ICON_SIZE} />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}