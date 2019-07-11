import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import FloatingActionButton from "../components/FloatingActionButton.js";
import Task from "../../tasks_management/Task.js";
import Draggable from "../../support/Draggable.js";
import TaskList from "../../tasks_management/TaskList.js";


export default class PlayGroundScreen extends Component {
    render() {
        const data = [{
            "id": "3",
            "title": "Complete employment forms",
            "description": null,
            "dateCreated": "2019-05-20T07:36:13.842880",
            "completed": false,
            "dateCompleted": null,
            "dueDate": null,
            "parentId": null,
            "children": []
        }]

        return(
            <View style={styles.playPen}>
                <View>
                    <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "blue"}}>

                        <View style={{flexDirection:"column"}}>
                            <Text style={{fontWeight: "200", fontSize: 26, color: "#000000"}}>Task Title</Text>
                            <Text style={{fontWeight: "600", fontSize: 16, color: "#9A9A9A"}}>Task Due Date</Text>  
                        </View>

                        <View style={{flexDirection:"column", right: 10}}>
                            <Text style={{fontWeight: "900", fontSize: 16, color: "#9A9A9A"}}>3</Text>
                            <View style={{height: 4, backgroundColor: "#9A9A9A"}}/>
                            <Text style={{fontWeight: "900", fontSize: 16, color: "#9A9A9A"}}>9</Text>
                        </View>

                    </View>
                    <View style={{backgroundColor: "red"}}/>
                </View>

                {/* <TaskList
                    tasks={data}
                    removed={[]} /> */}
                {/* <Draggable /> */}
                {/* <FlatList
                    data={[
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1},
                        {id: 1}
                    ]}
                    renderItem={({item, index, separators})=>(<Draggable />)}
                    scrollEnabled={true}
                /> */}

                <FloatingActionButton
                    action={()=>{ }}
                    text="Hello World" 
                    backgroundColor="#2D77EA" 
                    contentColor="#FFFFFF"
                    positioning={{position: "absolute", right: 16, bottom: 16}} /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playPen: {
        flex: 1
    }
});
