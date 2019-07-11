import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import FloatingActionButton from "../components/FloatingActionButton.js";
import Task from "../../tasks_management/Task.js";
import Draggable from "../../support/Draggable.js";
import TaskList from "../../tasks_management/TaskList.js";
import { appMainBackgroundColor, primaryFontColor, secondaryFontColor, primaryColor } from "../../constants/colors.js";


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

        //green wood prject

        return(
            <View style={styles.playPen}>
                <Draggable />

                <View style={{backgroundColor: appMainBackgroundColor}}>
                    <View style={{backgroundColor: appMainBackgroundColor, flexDirection: "row", alignItems: "center", justifyContent:"space-between"}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <View style={{width: 30, height: 30, borderWidth: 4, borderColor: primaryColor, borderRadius: 15, marginRight: 20}} />
                            <View style={{flexDirection:"column"}}>
                                <Text style={{fontWeight: "200", fontSize: 26, color: primaryFontColor}}>Task Title</Text>
                                <Text style={{fontWeight: "600", fontSize: 16, color: secondaryFontColor}}>Task Due Date</Text>  
                            </View>
                        </View>

                        <View style={{flexDirection:"column", marginRight: 10}}>
                            <Text style={{fontWeight: "900", fontSize: 18, color: secondaryFontColor}}>3</Text>
                            <View style={{height: 4, backgroundColor: "#9A9A9A"}}/>
                            <Text style={{fontWeight: "900", fontSize: 18, color: secondaryFontColor}}>9</Text>
                        </View>

                    </View>
                </View>

                {/* <TaskList
                    tasks={data}
                    removed={[]} /> */}
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
        flex: 1,
        backgroundColor: appMainBackgroundColor
    }
});
