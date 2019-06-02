import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableNativeFeedback, Alert} from "react-native";

export default class TodoView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false // NOTE in the future this should be set by a prop.
        }

        this._onShortPress = this._onShortPress.bind(this);
    }

    _onShortPress(event) {
        this.setState({
            completed: !this.state.completed
        })
    }

    render() {
        const checkBoxStyle = (this.state.completed)? styles.checkBoxCompleted:styles.checkBoxDefault;

        return(
            <TouchableWithoutFeedback onLongPress={()=>{Alert.alert("Long Press")}}>
                <View style={styles.todoContainer}>
                    <TouchableWithoutFeedback onPress={this._onShortPress}>
                        <View style={styles.checkBoxContainer}>
                            <View style={checkBoxStyle}/>
                        </View>
                    </TouchableWithoutFeedback>
                    <View>
                        <Text style={styles.todoTitleText}>Todo Title</Text>
                        <Text style={styles.todoDueDateText}>Todo Due Date</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection:"row",
    },
    checkBoxDefault: {
        height: 25,
        width: 25,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderRadius: 7,
        borderColor: "black"
    },
    checkBoxCompleted: {
        height: 25,
        width: 25,
        backgroundColor: "#4A86E8",
        borderRadius: 7,
    },
    checkBoxContainer: {
        paddingRight:16,
        justifyContent: "center",
    },
    todoTitleText: {
        color: "#000000",
        fontSize: 16
    },
    todoDueDateText: {
        color: "#A2A2A2",
        fontSize: 12,
        fontWeight:"bold"
    }
});