import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableNativeFeedback, Alert} from "react-native";

export default class TodoView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false, // NOTE in the future this should be set by a prop.
            deletable: false
        }

        this._toggleCompleted = this._toggleCompleted.bind(this);
        this._toggleDeletable = this._toggleDeletable.bind(this);
        this._delayedToggleDeletable = this._delayedToggleDeletable.bind(this);
    }

    _toggleCompleted(event) {
        this.setState({
            completed: !this.state.completed
        })
    }

    _toggleDeletable(event) {
        this.setState({
            deletable: !this.state.deletable
        })
    }

    /**
     * !!WARNING!! this method is a problematic solution to the issue
     * @param {Event} event 
     */
    _delayedToggleDeletable(event) {
        const that = this;

        setTimeout(() => {
            that.setState({
                deletable: !that.state.deletable
            });
        }, 100);
    }

    render() {
        let checkBoxStyle;
        let todoShortPressAction;
        let todoLongPressAction;
        let checkBoxShortPressAction;
        let checkBoxLongPressAction;
        let TodoText;
        // TodoText = () => { return (
        //     <View>
        //         <Text style={styles.todoTitleText}>Todo Title</Text>
        //     </View>
        // )};
        // console.error(this.props.dueDate);
        

        if(this.state.deletable) {
            checkBoxShortPressAction = (event)=>{Alert.alert("Todo Deleted!")};
            checkBoxLongPressAction = null;
            todoShortPressAction = this._toggleDeletable;
            todoLongPressAction = null;
            checkBoxStyle = styles.checkBoxDelete;
        } else {
            checkBoxShortPressAction = this._toggleCompleted;
            checkBoxLongPressAction = this._toggleDeletable;
            todoShortPressAction = null;
            todoLongPressAction = this._delayedToggleDeletable;
            checkBoxStyle = (this.state.completed)? styles.checkBoxCompleted: styles.checkBoxDefault;
        }

        if(typeof this.props.dueDate === 'undefined' || this.props.dueDate === null) {
            TodoText = () => { return (
                <View>
                    <Text style={styles.todoTitleText}>{this.props.title}</Text>
                </View>
            )};
        } else {
            TodoText = () => { return (
                <View>
                    <Text style={styles.todoTitleText}>{this.props.title}</Text>
                    <Text style={styles.todoDueDateText}>{this.props.dueDate}</Text>
                </View>
            )};
        }

        return(
            <TouchableWithoutFeedback onPress={todoShortPressAction} onLongPress={todoLongPressAction}>
                <View style={styles.todoContainer}>
                    <TouchableWithoutFeedback onPress={checkBoxShortPressAction} onLongPress={checkBoxLongPressAction}>
                        <View style={styles.checkBoxContainer}>
                            <View style={checkBoxStyle}/>
                        </View>
                    </TouchableWithoutFeedback>
                    <TodoText />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection:"row",
        paddingTop: 8,
        paddingBottom: 8
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
    checkBoxDelete: {
        height: 25,
        width: 25,
        backgroundColor: "#FF0000",
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