import React from "react";
import TokenSet from "./TokenSet";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

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

storiesOf('Token Set', module)
    .add('Expected', () => <TokenSet 
                                data={datumOne}
                                primaryIconColor='#FF9100'
                                primaryAction={action('button-click')}
                                secondaryIconColor='#4DA835'
                                secondaryAction={action('button-click')}
                                title='Links'
                                focusID='g_calendar'/>);

