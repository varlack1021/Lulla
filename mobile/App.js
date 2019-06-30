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
import TodoView from "./source/ui/components/TodoView.js";
import HeaderView from "./source/ui/components/HeaderView.js";
import FooterView from "./source/ui/components/FooterView";
import ExtendedFloatingActionButton from "./source/ui/components/ExtendedFloatingActionButton.js";
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
        "dueDate": "2019-05-21T20:01:16.079090",
        "parentId": null
      },
      {
        "id": "13",
        "title": "New Title",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T20:02:45.188774",
        "completed": false,
        "dateCompleted": null,
        "dueDate": "2019-05-21T20:02:35.342864",
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
      },
      {
        "id": "33",
        "title": "Complete employment forms",
        "description": null,
        "dateCreated": "2019-05-20T07:36:13.842880",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "34",
        "title": "New title",
        "description": null,
        "dateCreated": "2019-05-21T19:43:29.249388",
        "completed": true,
        "dateCompleted": "2019-05-26T03:40:50.254061",
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "35",
        "title": "Jack Black is Wack",
        "description": null,
        "dateCreated": "2019-05-21T19:44:37.636182",
        "completed": true,
        "dateCompleted": "2019-05-21T19:44:37.636197",
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "36",
        "title": "Do my homework.",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T19:57:27.333206",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "37",
        "title": "write an app.",
        "description": null,
        "dateCreated": "2019-05-21T19:57:27.334612",
        "completed": true,
        "dateCompleted": "2019-05-21T19:57:27.334622",
        "dueDate": "2019-05-21T19:56:44",
        "parentId": null
      },
      {
        "id": "38",
        "title": "Do my homework.",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T19:57:49.757189",
        "completed": false,
        "dateCompleted": null,
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "39",
        "title": "write an app.",
        "description": null,
        "dateCreated": "2019-05-21T19:57:49.757769",
        "completed": true,
        "dateCompleted": "2019-05-21T19:57:49.757780",
        "dueDate": "2019-05-21T20:01:16.079090",
        "parentId": null
      },
     {
        "id": "313",
        "title": "New Title",
        "description": "Get your homework finished jordane!",
        "dateCreated": "2019-05-21T20:02:45.188774",
        "completed": false,
        "dateCompleted": null,
        "dueDate": "2019-05-21T20:02:35.342864",
        "parentId": null
      },
      {
        "id": "314",
        "title": "write an app.",
        "description": null,
        "dateCreated": "2019-05-21T20:02:45.189563",
        "completed": true,
        "dateCompleted": "2019-05-21T20:02:45.189574",
        "dueDate": null,
        "parentId": null
      },
      {
        "id": "315",
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
              )}
              
              ListFooterComponent={
                <View>
                  <FooterView text="Guess who made me?" componentId={this.props.componentId}/>
                </View>
              }/>
        </View>
        <View style={{position:'absolute', right: 16, bottom: 16}}>
          <ExtendedFloatingActionButton text="add todo" action={this.startAddingATodo}/>
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
/**
 * Learn to use flow, buck, and babel
 * Abstract out color, and color associations in the app to allow for easy across
 * 
 * ~~~Todo Component
 * Refactor this component to make its code more elegant: use the various APIs (Stylesheet, touchables, Platform), and Pro Design Patterns
 * Fix the header spacing
 * - Make the whole component touchable.
 * - Fix the touch feature to use onPressIn and offPressOut to handle short and long presses.
 *
 * ~~~Navigation Feature
 * How should we organize our code base to handle sending of the ability to navigate thourghout the app.
 * Can we design the software to be navigation framework agnositic. technological agnosticism
 * 
 * ~~~Extended FAB Component
 * I don't know how to fully evaulate the effects of flex box statements.
 * - Add shadowing and basic animation to the FAB
 * 
 * ~~~Cancel Button
 * Make a unique font.
 * Make a the image a font
 * Add Animatation to the text
 * 
 * 
 */