/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import TodoView from "./source/ui/components/TodoView.js";

Testdata = {
  "data": {
    "getTodos": [
      {
        "id": "3",
        "title": "Complete employment forms",
        "description": null,
        "dateCreated": "2019-05-20T07:36:13.842880",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "4",
        "title": "New title",
        "description": null,
        "dateCreated": "2019-05-21T19:43:29.249388",
        "completed": true,
        "dateCompleted": "2019-05-26T03:40:50.254061",
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "5",
        "title": "Jack Black is Wack",
        "description": null,
        "dateCreated": "2019-05-21T19:44:37.636182",
        "completed": true,
        "dateCompleted": "2019-05-21T19:44:37.636197",
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "6",
        "title": "Do my homework.",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T19:57:27.333206",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "7",
        "title": "write an app.",
        "description": null,
        "dateCreated": "2019-05-21T19:57:27.334612",
        "completed": true,
        "dateCompleted": "2019-05-21T19:57:27.334622",
        "dueDate": "2019-05-21T19:56:44",
        "parentId": null
      },
      {
        "id": "8",
        "title": "Do my homework.",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T19:57:49.757189",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "9",
        "title": "write an app.",
        "description": null,
        "dateCreated": "2019-05-21T19:57:49.757769",
        "completed": true,
        "dateCompleted": "2019-05-21T19:57:49.757780",
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "10",
        "title": "find a girl friend",
        "description": null,
        "dateCreated": "2019-05-21T20:01:14.849684",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "11",
        "title": "find a girl friend",
        "description": null,
        "dateCreated": "2019-05-21T20:01:16.079090",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "12",
        "title": "find a girl friend",
        "description": null,
        "dateCreated": "2019-05-21T20:02:35.342864",
        "completed": true,
        "dateCompleted": "2019-05-26T10:01:20.293567",
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "13",
        "title": "New Title",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T20:02:45.188774",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "14",
        "title": "write an app.",
        "description": null,
        "dateCreated": "2019-05-21T20:02:45.189563",
        "completed": true,
        "dateCompleted": "2019-05-21T20:02:45.189574",
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "15",
        "title": "make a todo",
        "description": null,
        "dateCreated": "2019-05-26T03:38:59.428468",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      }
    ]
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <TodoView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
/**
 * Learn to use flow, buck, and babel
 * 
 * ~~~Todo Component
 * Refactor this component to make its code more elegant: use the various APIs (Stylesheet, touchables, Platform), and Pro Design Patterns
 */