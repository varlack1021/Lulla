import React from 'react';
import SideBarScreen from './SideBarScreen';
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { Alert } from 'react-native';
import TokenSet from '../Tokens/TokenSet';

const datumOne = [
    {
        serviceID: 'blackboard',
        areLinked: true
    },{
        serviceID: 'g_calendar',
        areLinked: true
    },{
        serviceID: 'ms_todo',
        areLinked: false
    },{
        serviceID: 'todoist',
        areLinked: false
    }
];

storiesOf('Side Bar Screen', module)
    .add('Expected', () => <SideBarScreen 
                                backgroundColor={'#FF9100'}
                                iconName={'chevron-left'}
                                action={() => {Alert.alert('button pressed')}}/>);