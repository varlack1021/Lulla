import React from 'react';
import { View } from 'react-native';
import GoalsTab from './components/screens/GoalsTab';
import TasksTab from './components/screens/TasksTab';
import WhatTab from './components/screens/WhatTab';
import WhenTab from './components/screens/WhenTab';
import StepsTab from './components/screens/StepsTab';
import { 
  createMaterialTopTabNavigator,
  createSwitchNavigator
 } from 'react-navigation';
import HeaderComponent from './components/elements/HeaderComponent';

const MainTabNavigator = createMaterialTopTabNavigator({
  TaskTab: { screen: TasksTab },
  GoalTab: { screen: GoalsTab }
}, {
  tabBarComponent: HeaderComponent,
  initialRouteName: "TaskTab",
  initialLayout: {
    height: 100,
    width: 100
  },
  swipeEnabled: true,
  order: ["TaskTab", "GoalTab"]
});

const TaskAdditionNavigator = createMaterialTopTabNavigator({
  WhatTab: { screen: WhatTab },
  WhenTab: { screen: WhenTab},
  StepsTab: { screen: StepsTab}
}, {
  initialRouteName: "WhatTab",
  swipeEnabled: true,
  order: ["WhatTab", "WhenTab", "StepsTab"],
  tabBarComponent: null
});

const TheApp = createSwitchNavigator({
  MainScreen: { screen: MainTabNavigator },
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