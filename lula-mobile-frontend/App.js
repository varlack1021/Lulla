import React from 'react';
import {  createSwitchNavigator } from 'react-navigation';
import TasksGoalsTabNavigator from './source/navigators/TasksGoalsTabNavigator';
import TaskAdditionNavigator from './source/navigators/TaskAdditionNavigator';




const TheApp = createSwitchNavigator({
  MainScreen: { screen: TasksGoalsTabNavigator },
  AdditionStart: { screen: TaskAdditionNavigator }
}, {
  initialRouteName: "MainScreen",
  resetOnBlur: false,
});

const MainScreen = () => {
  return (
    <TheApp />
  );
}

// TODO: Refractor all the names (Screen called *Sceen, Component called *Component, Navigator called *Navigator) 
// TODO: Set a flow of logic for your code and Write a guild to reading your code


export default class App extends React.Component {
  render() {
    return (
      <MainScreen />
    );
  }
}