import React from 'react';
import {  createSwitchNavigator } from 'react-navigation';
import  TasksScreen from "./source/screens/TasksScreen";
import TaskAdditionProcessNavigator from './source/navigators/TaskAdditionProcessNavigator';

const RootNavigator = createSwitchNavigator({
  MainScreen: { screen: TasksScreen },
  AdditionStart: { screen: TaskAdditionProcessNavigator }
}, {
  initialRouteName: "MainScreen",
  resetOnBlur: false,
});

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}