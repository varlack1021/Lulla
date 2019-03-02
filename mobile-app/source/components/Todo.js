import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Alert,
} from "react-native";
import * as constants from "../Constants";
import { FontAwesome } from "@expo/vector-icons";

// TODO reduce the size of your props.


export default class Todo extends React.Component {
    //TODO write code that allows this component to be init with internet data.
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            deletable: false
        }

        this._handleShortPress = this._handleShortPress.bind(this);
        this._handleLongPress = this._handleLongPress.bind(this);
        this._toggleDeletability = this._toggleDeletability.bind(this);
    }

    _handleShortPress(action) {
        console.log("This Todo just recieved a Short press");
        if(this.state.deletable == true) {
            if(action == true) {
                Alert.alert("Place holder", "Soon this todo will have been deleted");
            } else {
                this._toggleDeletability();
            }
            return;
        }

        let newState = (this.state.selected)? false:true;

        this.setState({
            selected: newState
        });
    }

    _handleLongPress() {
        console.log("This Todo just recieved a long press");
        this._toggleDeletability()
    }

    _toggleDeletability() {
        Alert.alert("Place holder", "This Todo is now Deletable");
        let newState = (this.state.deletable)? false: true;
        this.setState({
            deletable: newState
        });
    }

    render() {
        if (this.state.deletable) {
            return(
                <Todo_Deleteable longPress={this._handleLongPress} shortPress={this._handleShortPress} data={this.props.data} />
            );
        }

        const icon = (this.state.selected)? constants.TODO_STATUS_ICON_SELECTED : constants.TODO_STATUS_ICON_DEFAULT;
        return(
            <Todo_Default statusIcon={icon} longPress={this._handleLongPress} shortPress={this._handleShortPress} data={this.props.data} />
        );
    }
}


function Todo_Default(props) {
    return(
        <TouchableWithoutFeedback onLongPress={props.longPress} onPress={props.shortPress}>
            <View style={styles.rootContainer}>
                <View style={styles.statusContainer_default}>
                    <FontAwesome name={props.statusIcon} size={constants.TODO_STATUS_ICON_SIZE} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        {props.data.title}
                    </Text>
                    <Text styls={styles.dueDate}>
                        {props.data.creationDateTime}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

function Todo_Deleteable(props) {
    return(
        <View style={styles.rootContainer}>
            <TouchableWithoutFeedback onLongPress={props.longPress} onPress={() => props.shortPress(true)}>
                <View style={styles.statusContainer_deletable}>
                    <FontAwesome name={constants.TODO_STATUS_ICON_DELETABLE} size={constants.TODO_STATUS_ICON_SIZE}/>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onLongPress={props.longPress} onPress={props.shortPress}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        {props.data.title}
                    </Text>
                    <Text style={styles.dueDate}>
                        {props.data.creationDateTime}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 24,
    },
    contentContainer: {
        backgroundColor: 'rgb(255,255,255)',
        width: '100%',
    },
    statusContainer_default: {
        alignItems:'flex-start',
        justifyContent:'center',
        width: 36,
        backgroundColor: 'rgb(100,100,100)',
    },
    statusContainer_deletable: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 36,
        backgroundColor: 'rgb(255,0,0)',
    },
    title: {
        fontSize: 16,
        backgroundColor: 'rgb(120,120,120)',
    },
    dueDate: {
        fontSize: 12,
        fontWeight: '600',
        color: 'rgb(162,162,162)',
        backgroundColor: 'rgb(50,50,50)',
    },
});