import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import * as values from "../constants";
import { FontAwesome } from "@expo/vector-icons";

class SingleTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            deletable: false
        };

        this.handleShortPress = this.handleShortPress.bind(this);
        this.handleLongPress = this.handleLongPress.bind(this);

        this.toggleDeletability = this.toggleDeletability.bind(this);
    }

    // TODO: implement delete item functionalitys
    // TODO: find a more readable, memory-time efficient to the delete action param
    handleShortPress(action) {
        if( this.state.deletable == true ){
            if (action == true) {
                Alert.alert("Placeholder Message", "This action will delete the pressed element in the future! Please delete this alert.")
            } else {
                this.toggleDeletability()
            }
            return;
        }
        
        let newState = (this.state.selected)? false: true;
        
        this.setState({
                selected: newState
        });
    }

    handleLongPress() {
        this.toggleDeletability();
    }

    toggleDeletability() {
        let newState = (this.state.deletable)? false: true;
        this.setState({
            deletable: newState
        });
    }

    // TODO: find a way to have the deletable component handle long presses with out 
    // 2 eventhandlers.
    // TODO: rewrite this function so it's easier to read.
    render() {

        if (this.state.deletable == true) {
            return(
                <View style={ styles.taskContainer }>
                    <TouchableWithoutFeedback onLongPress={this.handleLongPress} onPress={() => this.handleShortPress(true)}>
                        <View style={ styles.statusIndicatorContainer_deletable }>
                            <FontAwesome name={ values.DELETABLE_STATUS_ICON } size={ values.STATUS_ICON_SIZE } />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onLongPress={this.handleLongPress} onPress={this.handleShortPress}>
                        <View style={ styles.taskContentContainer }>
                            <Text style={ styles.taskTitle }>
                                { this.props.title }
                            </Text>
                            <Text style={ styles.taskDueDate }>
                                { this.props.dueDate }
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            );
        }

        const statusIcon = (this.state.selected)? values.SELECTED_STATUS_ICON: values.UNSELECTED_STATUS_ICON;
        return(
            <TouchableWithoutFeedback onPress={this.handleShortPress} onLongPress={this.handleLongPress} >
                <View style={ styles.taskContainer }>
                    <View style={ styles.statusIndicatorContainer }>
                        <FontAwesome name={ statusIcon } size={ values.STATUS_ICON_SIZE } />
                    </View>
                    <View style={ styles.taskContentContainer }>
                        <Text style={ styles.taskTitle }>
                            { this.props.title }
                        </Text>
                        <Text style={ styles.taskDueDate }>
                            { this.props.dueDate }
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 24
    },
    statusIndicatorContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 36,
        backgroundColor: 'rgb(100,100,100)',
    },
    statusIndicatorContainer_deletable: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 36,
        backgroundColor: 'rgb(255,0,0)',
    },
    taskContentContainer: {
        backgroundColor: 'rgb(255,255,255)',
        width: '100%'
    },
    taskTitle: {
        fontSize: 16,
        backgroundColor: 'rgb(120,120,120)'
    },
    taskDueDate: {
        fontSize: 12,
        fontWeight: '600',
        color: 'rgb(162,162,162)',
        backgroundColor: 'rgb(50,50,50)'
    }
});

export default SingleTask;