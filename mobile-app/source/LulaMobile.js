import React from "react";
import { Text, View } from "react-native";
import TodoList from "./screens/TodoList";

export default class LulaMobile extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello World!</Text>
                <TodoList />
            </View>
        );
    }
}