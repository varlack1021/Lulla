// TODO: Optimize all imports
// TODO: Figure out how to work with your constants, consider passing them all in from parent components
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as constants from "../constants";

class TasksScreen_Header extends Component {
    render() {
        return(
            <View >
                <Text style={styles.text}>
                {constants.TASK_SCREEN_HEADER}
                </Text>
            </View>
        );
    }
}

// TODO: consider the text components positioning
const styles = StyleSheet.create({
    text: {
        color: "#000",
        fontSize: 48,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    container: {
        width: "100%",
        height: 95,
        flexDirection: "row",
    }
});

export default TasksScreen_Header;