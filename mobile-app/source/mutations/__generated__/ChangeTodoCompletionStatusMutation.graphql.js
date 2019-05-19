/**
 * @flow
 * @relayHash 3c88d66e700c19ce4910690d2901cd3d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChangeTodoCompletionStatusMutationVariables = {|
  id: string
|};
export type ChangeTodoCompletionStatusMutationResponse = {|
  +toggleTodo: ?{|
    +todo: ?{|
      +uuid: string
    |}
  |}
|};
export type ChangeTodoCompletionStatusMutation = {|
  variables: ChangeTodoCompletionStatusMutationVariables,
  response: ChangeTodoCompletionStatusMutationResponse,
|};
*/


/*
mutation ChangeTodoCompletionStatusMutation(
  $id: ID!
) {
  toggleTodo(id: $id) {
    todo {
      uuid
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "uuid",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ChangeTodoCompletionStatusMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ToggleTodo",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "todo",
            "storageKey": null,
            "args": null,
            "concreteType": "TodoObject",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ChangeTodoCompletionStatusMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ToggleTodo",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "todo",
            "storageKey": null,
            "args": null,
            "concreteType": "TodoObject",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
  },
  "params": {
    "operationKind": "mutation",
    "name": "ChangeTodoCompletionStatusMutation",
    "id": null,
    "text": "mutation ChangeTodoCompletionStatusMutation(\n  $id: ID!\n) {\n  toggleTodo(id: $id) {\n    todo {\n      uuid\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1212fc279f878bfcd5266bfbc11c582';
module.exports = node;
