import React from "react";
import { 
    View,
    Text,
    FlatList,
    StyleSheet,
} from "react-native";
import { graphql, QueryRenderer } from "react-relay";

import { environment } from "../Enviroment";
import FAButton from "../components/FAButton";
import Todo from "../components/Todo";
import TodoListHeader from "../components/TodoListHeader";

// TODO: delete dummy data
// TODO: there is miss match between the back end 
// not having a dueDate field and the current
// frontend

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
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query TodoListAppleJaxQuery{
                        allTodos {
                            edges {
                                node {
                                    title
                                    isComplete
                                    creationDateTime
                                    id
                                }
                            }
                        }
                    }
                `}
                variables={{}}
                render={({error, props}) => {
                    if(error) {
                        // Replace with appropriate error screen
                        console.log(error)
                        console.log(props);
                        
                        return(<Text>Error "{error.source}": {error.message}</Text>);
                    }
                    if(!props) {
                        // Replace with appropriate Loading screen
                        return(<Text>Loading...</Text>);
                    }

                    return(
                        <ListOfTodos data={props.allTodos.edges}/>
                    );
                }}
                
            />
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
                    ({item}) => <Todo title={item.node.title} dueDate={item.node.creationDateTime}/>
                }
                keyExtractor={(item)=>item.node.id}
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