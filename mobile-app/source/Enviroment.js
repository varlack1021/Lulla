/**
 * This file contians the relay environment
 */
import { 
    Environment,
    Network,
    RecordSource,
    Store
} from "relay-runtime";
import * as constants from "./Constants";


function fetchQuery(operation, variables) {
    return fetch( constants.BACKEND_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        })
    }).then( response => {
        return response.json()
    });
}

export const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource())
});