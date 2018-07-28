import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FloatingActionButton from '../elements/FloatingActionButton';

export class GoalsTab extends Component {
    render() {
        return (
            < View style = { styles.container }>
                <FlatList 
                data = {[{key: "1"},{key: "2"},{key: "3"}]}
                renderItem = {(item) => <View key={item.key}><Text>"this is a goal component"</Text></View>} />
                <FloatingActionButton action = { () => {this.props.navigation.navigate('AdditionStart')} } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goal: {
        color: "#f00"
    }
});


export default GoalsTab;