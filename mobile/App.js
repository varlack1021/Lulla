/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, FlatList, Alert} from 'react-native';
import { Navigation } from "react-native-navigation";
import TodoView from "./source/shared_ui/components/TodoView.js";
import HeaderView from "./source/shared_ui/components/HeaderView.js";
// import FloatingActionButton from "./source/shared_ui/components/FloatingActionButton.js";
import { getTasks, saveTasks } from "./source/cache/functions";


let testdata = {
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
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "4",
        "title": "New title",
        "description": null,
        "dateCreated": "2019-05-21T19:43:29.249388",
        "completed": true,
        "dateCompleted": "2019-05-26T03:40:50.254061",
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "5",
        "title": "Jack Black is Wack",
        "description": null,
        "dateCreated": "2019-05-21T19:44:37.636182",
        "completed": true,
        "dateCompleted": "2019-05-21T19:44:37.636197",
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "6",
        "title": "Do my homework.",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T19:57:27.333206",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "7",
        "title": "write an app.",
        "description": null,
        "dateCreated": "2019-05-21T19:57:27.334612",
        "completed": true,
        "dateCompleted": "2019-05-21T19:57:27.334622",
        "dueDate": "2019-05-21T19:56:44",
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "8",
        "title": "Do my homework.",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T19:57:49.757189",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "9",
        "title": "write an app.",
        "description": null,
        "dateCreated": "2019-05-21T19:57:49.757769",
        "completed": true,
        "dateCompleted": "2019-05-21T19:57:49.757780",
        "dueDate": "2019-05-21T20:01:16.079090",
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "13",
        "title": "New Title",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T20:02:45.188774",
        "completed": false,
        "dateCompleted": null,
        "dueDate": "2019-05-21T20:02:35.342864",
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "14",
        "title": "write an app.",
        "description": null,
        "dateCreated": "2019-05-21T20:02:45.189563",
        "completed": true,
        "dateCompleted": "2019-05-21T20:02:45.189574",
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "15",
        "title": "make a todo",
        "description": null,
        "dateCreated": "2019-05-26T03:38:59.428468",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "33",
        "title": "Complete employment forms",
        "description": null,
        "dateCreated": "2019-05-20T07:36:13.842880",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "34",
        "title": "New title",
        "description": null,
        "dateCreated": "2019-05-21T19:43:29.249388",
        "completed": true,
        "dateCompleted": "2019-05-26T03:40:50.254061",
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "35",
        "title": "Jack Black is Wack",
        "description": null,
        "dateCreated": "2019-05-21T19:44:37.636182",
        "completed": true,
        "dateCompleted": "2019-05-21T19:44:37.636197",
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
      {
        "id": "36",
        "title": "Do my homework.",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T19:57:27.333206",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null,
        "children": [
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": false},
          {"completed": true},
          {"completed": true},
          {"completed": true},
        ]
      },
    //   {
    //     "id": "37",
    //     "title": "write an app.",
    //     "description": null,
    //     "dateCreated": "2019-05-21T19:57:27.334612",
    //     "completed": true,
    //     "dateCompleted": "2019-05-21T19:57:27.334622",
    //     "dueDate": "2019-05-21T19:56:44",
    //     "parentId": null
    //   },
    //   {
    //     "id": "38",
    //     "title": "Do my homework.",
    //     "description": "Get your homework finished jordane!",
    //     "dateCreated": "2019-05-21T19:57:49.757189",
    //     "completed": false,
    //     "dateCompleted": null,
    //     "dueDate": null,
    //     "parentId": null
    //   },
    //   {
    //     "id": "39",
    //     "title": "write an app.",
    //     "description": null,
    //     "dateCreated": "2019-05-21T19:57:49.757769",
    //     "completed": true,
    //     "dateCompleted": "2019-05-21T19:57:49.757780",
    //     "dueDate": "2019-05-21T20:01:16.079090",
    //     "parentId": null
    //   },
    //  {
    //     "id": "313",
    //     "title": "New Title",
    //     "description": "Get your homework finished jordane!",
    //     "dateCreated": "2019-05-21T20:02:45.188774",
    //     "completed": false,
    //     "dateCompleted": null,
    //     "dueDate": "2019-05-21T20:02:35.342864",
    //     "parentId": null
    //   },
    //   {
    //     "id": "314",
    //     "title": "write an app.",
    //     "description": null,
    //     "dateCreated": "2019-05-21T20:02:45.189563",
    //     "completed": true,
    //     "dateCompleted": "2019-05-21T20:02:45.189574",
    //     "dueDate": null,
    //     "parentId": null
    //   },
    //   {
    //     "id": "315",
    //     "title": "make a todo",
    //     "description": null,
    //     "dateCreated": "2019-05-26T03:38:59.428468",
    //     "completed": false,
    //     "dateCompleted": null,
    //     "dueDate": null,
    //     "parentId": null
    //   }
    ]
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks : [],
      delete: [],
      changed: []
    };
    
    this.startAddingATodo = this.startAddingATodo.bind(this);
  }

  componentWillMount() {
    getTasks().then((gottenTask) => {
      this.setState({
        tasks: gottenTask
      });
    });
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
    Alert.alert(JSON.stringify(this.state.tasks))

  }

  componentDidDisappear() {
    saveTasks(this.state.tasks);
  }

  startAddingATodo() {
    Navigation.push(this.props.componentId, {
      topTabs: {
          children:[
              {
                  component: {
                      name: "TodoAdditionPage"
                  }
              },
              {
                  component: {
                      name: "WhenPage"
                  }
              },
              {
                  component: {
                      name: "DescriptionPage",
                  }
              }
          ]
      }
  });

  }


  render() {
    return (
      <View style={styles.app}>
        <View style={styles.listContainer}>
          {/* <HeaderView text="Your Todos"/> */}
          <FlatList
              ListHeaderComponent={<HeaderView text="Your Todos"/>}
              stickyHeaderIndices={[0]} //what the analogy behind this??
              
              data={this.state.tasks}
              keyExtractor={(item, index)=>{return item.id}}
              renderItem={({item, index, separators})=>(
                <TodoView title={item.title} dueDate={item.dateCreated} />
              )} />
        </View>
        <View style={{position:'absolute', right: 16, bottom: 16}}>
          {/* <ExtendedFloatingActionButton text="add todo" action={this.startAddingATodo}/> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app : {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  listContainer: {
    paddingLeft: 16,
    paddingTop: 16
  }
});