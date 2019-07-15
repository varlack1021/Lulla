import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import FloatingActionButton from "../components/FloatingActionButton.js";
import Task from "../../tasks_management/Task.js";
import TaskList from "../../tasks_management/TaskList.js";
import { appMainBackgroundColor, primaryFontColor, secondaryFontColor, primaryColor } from "../../constants/colors.js";
import ToolTile from "../components/ToolTile.js";


export default class PlayGroundScreen extends Component {
    render() {
        const data = [
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        }, 
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        }, 
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        },
        {
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": "2019-07-09T22:05:24",
            "parentId": null,
            "children": [
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": false},
                {"completed": true},
                {"completed": true},
                {"completed": true},
            ]
        }
    ]

        //green wood prject
        const datum = [
            {
                "id": "3",
                "title": "Complete employment forms",
                "description": null,
                "dateCreated": "2019-05-20T07:36:13.842880",
                "completed": false,
                "dateCompleted": null,
                "dueDate": "2019-07-09T22:05:24",
                "parentId": null,
                "children": [
                    {"completed": true},
                    {"completed": false},
                    {"completed": true},
                    {"completed": false},
                    {"completed": true},
                    {"completed": true},
                    {"completed": true},
                ]
            },
            {
                "id": "4",
                "title": "Complete employment forms",
                "description": null,
                "dateCreated": "2019-05-20T07:36:13.842880",
                "completed": false,
                "dateCompleted": null,
                "dueDate": "2019-07-09T22:05:24",
                "parentId": null,
                "children": [
                    {"completed": true},
                    {"completed": false},
                    {"completed": true},
                    {"completed": false},
                    {"completed": true},
                    {"completed": true},
                    {"completed": true},
                ]
            }
        ]
        return(
            <View style={styles.playPen}>
                <ToolTile 
                    text='Tool Title'
                    color={primaryColor}
                    empty={true}
                />
                {/* <TaskList
                    tasks={data}
                    removed={[]} /> */}
                <FloatingActionButton
                    action={()=>{ }}
                    text="Hello World" 
                    backgroundColor={primaryColor} 
                    contentColor="#FFFFFF"
                    positioning={{position: "absolute", right: 16, bottom: 16}} /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playPen: {
        flex: 1,
        backgroundColor: appMainBackgroundColor
    }
});
