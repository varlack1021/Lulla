import React from "react";
import { 
    View,
    Text,
    FlatList,
    StyleSheet,
} from "react-native";
import FAButton from "../components/FAButton";
import Todo from "../components/Todo";
import TodoListHeader from "../components/TodoListHeader";

// TODO: delete dummy data


export default class TodoList extends React.Component {
    render() {
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

        return(
            <ListOfTodos data={dummyData} />
        );
    }
}

function ListOfTodos(props) {
    return(
        <View style={styles.container}>
            <TodoListHeader />
            <FlatList
                data={props.data}
                renderItem={
                    ({item}) => <Todo title={item.title} dueDate={item.dueDate}/>
                }
                keyExtractor={(item)=>item.dueDate}
            />
            <FAButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
    },
});