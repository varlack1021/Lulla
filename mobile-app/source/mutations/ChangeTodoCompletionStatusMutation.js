import { graphql, commitMutation } from "react-relay";

const MUTATION = graphql`
    mutation ChangeTodoCompletionStatusMutation($id: ID!) {
        toggleTodo(id: $id) {
            todo {
                uuid
            }
        }
    }`;

function commit(environment, todo_id) {
    
    return commitMutation(
        environment,
        {
            mutation: MUTATION,
            variables : { id: todo_id }
        }
    );
}

export default {commit};