import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { Feather } from "@expo/vector-icons";

class SingleTask extends Component {
    render() {
        return(
            <TouchableWithoutFeedback>
                <View style={ styles.taskContainer }>
                    <View style={ styles.statusIndicatorContainer }>
                        <Feather name="square" size={ 20 } />
                    </View>
                    <View style={ styles.taskContentContainer }>
                        <Text style={ styles.taskTitle }>
                            { this.props.title }
                            {/* Walk the dog */}
                        </Text>
                        <Text style={ styles.taskDueDate }>
                            { this.props.dueDate }
                            {/* 09/02/2013 */}
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
        // backgroundColor: 'rgb(100,90,21)',
        marginLeft: 24
    },
    statusIndicatorContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 36,
        backgroundColor: 'rgb(100,100,100)',
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