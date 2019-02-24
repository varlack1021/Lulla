/**
 * @flow
 * @relayHash a1c0c11fbeeeee9d51e96b0a181e5b42
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoListAppleJaxQueryVariables = {||};
export type TodoListAppleJaxQueryResponse = {|
  +allTodos: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +title: string,
        +isComplete: boolean,
        +creationDateTime: any,
        +id: string,
      |}
    |}>
  |}
|};
export type TodoListAppleJaxQuery = {|
  variables: TodoListAppleJaxQueryVariables,
  response: TodoListAppleJaxQueryResponse,
|};
*/


/*
query TodoListAppleJaxQuery {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allTodos",
    "storageKey": null,
    "args": null,
    "concreteType": "TodoObjectConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "TodoObjectEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "TodoObject",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "creationDateTime",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListAppleJaxQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoListAppleJaxQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TodoListAppleJaxQuery",
    "id": null,
    "text": "query TodoListAppleJaxQuery {\n  allTodos {\n    edges {\n      node {\n        title\n        isComplete\n        creationDateTime\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '281fd559d59f47a47f28b5424bd4454c';
module.exports = node;
