import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

import Task from "./Task.js";

/**
 * 
 */
export default class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollable: true,
            tasks: this.props.tasks,
            removed: this.props.removed
        };

        this.renderTask = this.renderTask.bind(this);
        this.setScrollable = this.setScrollable.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    render() {

        console.log(this.props.tasks);
        
        return(
            <FlatList
                ListHeaderComponent={() => {
                    return(
                        <View>
                            <Text style={{fontFamily: "Raleway-Light", fontSize: 50, color: "black"}}>Hi, Jordane</Text>
                            <Text style={{fontFamily: "Raleway-SemiBold", fontSize: 30, color: "black"}}>Your Nutshell</Text>
                        </View>
                    );                    
                }}
                style={[this.props.positioning]}
                data={this.props.tasks}
                scrollEnabled={this.state.scrollable}
                renderItem={({item}) => this.renderTask(item)}
                keyExtractor={(taskData, index)=>{return taskData.id}}
            />
        );
    }

    renderTask(data) {
        return (
            <Task 
                data={data}
                removeTask={this.removeTask}
                setScrollable={this.setScrollable}
            />
        );
    }

    setScrollable(newState) {
        this.setState({
            scrollable: newState
        });
    }

    removeTask(id) {
        this.setState({
            task: this.state.data.filter(item => item.key !== key),
            removed: this.state.removed.concat(id)
        });
    }

    createTasks(data) {
        //implement later
    }
}