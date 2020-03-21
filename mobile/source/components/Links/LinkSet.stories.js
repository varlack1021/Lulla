import React from "react";
import LinkSet from "./LinkSet";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

const datumOne = [
    {
        serviceID: 'blackboard',
        inUse: true
    },{
        serviceID: 'g_calendar',
        inUse: true
    },{
        serviceID: 'ms_todo',
        inUse: false
    }
];


storiesOf('Link Set', module)
    .add('Expected', () => <LinkSet
                                data={datumOne}
                                headerText='Your Services'
                                primaryHighlightColor='#FFB85C'
                                primaryIconColor='#FF9100'
                                primaryAction={action('button-click')}
                                secondaryHighlightColor='#8AE65C'
                                secondaryIconColor='#4DA835'
                                secondaryAction={action('button-click')}/>);