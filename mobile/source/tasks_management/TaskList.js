import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";

import Task from "./Task.js";
import Draggable from "../support/Draggable.js";


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

        this.setScrollable = this.setScrollable.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    render() {
        return(
            <FlatList
                style={[this.props.positioning]}
                data={this.state.tasks}
                scrollEnabled={this.state.scrollable}
                renderItem={({taskData}) => this.renderTask(taskData)}
                keyExtractor={(taskData, index)=>{return taskData.id}}
            />
        );
    }

    renderTask(data) {
        return (
            <Draggable 
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