import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FloatingActionButton from '../components/FloatingActionButton';
import SingleTask from '../components/SingleTask';

// TODO: delete this const
const dummyData = [
    {
        title: "Walk the dog",
        dueDate: "09/02/2013"
    },
    {
        title: "Go to school",
        dueDate: "09/07/2013"
    },
    {
        title: "Finish your article ",
        dueDate: "09/06/2013"
    }
];

// TODO: make variable file for your routes
class TasksPage extends Component {
    render() {
        return (
            <View style = { styles.container }>
                <FlatList
                    data = {dummyData}
                    renderItem = {({item}) => <SingleTask key={item.dueDate} title={item.title} dueDate={item.dueDate}/>} />
                <FloatingActionButton action={ () => {this.props.navigation.navigate('AdditionStart')} } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
});

export default TasksPage;