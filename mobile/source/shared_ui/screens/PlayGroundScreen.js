import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import FloatingActionButton from "../components/FloatingActionButton.js";



export default class PlayGroundScreen extends Component {
    render() {
        const data = {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": null,
            "parentId": null,
            "children": []
        }

        return(
            <View style={styles.playPen}>
                <FloatingActionButton
                    action={()=>{ }}
                    text="Hello World" 
                    backgroundColor="#2D77EA" 
                    contentColor="#FFFFFF"
                    positioning={{position: "absolute", right: 16, bottom: 16}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playPen: {
        flex: 1
    }
});
