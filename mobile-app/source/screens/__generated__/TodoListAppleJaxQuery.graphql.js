/**
 * @flow
 * @relayHash bcb99c947476a467ff17420873d51316
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
        +uuid: string,
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
        uuid
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
                "name": "uuid",
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
    "text": "query TodoListAppleJaxQuery {\n  allTodos {\n    edges {\n      node {\n        title\n        isComplete\n        creationDateTime\n        uuid\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c3d785f7f0443bccb4b0bb91b8480478';
module.exports = node;
