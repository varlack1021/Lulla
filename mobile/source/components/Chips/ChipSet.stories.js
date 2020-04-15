import React from "react";
import ChipSet from "./ChipSet";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

const data = [
    {
        label: 'Main',
        id: 0,
    },{
        label: 'Side Calendar',
        id: 1,
    },{
        label: 'Home Work',
        id: 2,
    },{
        label: 'Jax',
        id: 3,
    },{
        label: 'Test',
        id: 4,
    },{
        label: 'Side Calendar',
        id: 5,
    },{
        label: 'Test',
        id: 6,
    },{
        label: 'Side Calendar',
        id: 7,
    },{
        label: 'Side Calendar',
        id: 8,
    },{
        label: 'Home Work',
        id: 9,
    },{
        label: 'Jax',
        id: 10,
    }
];

storiesOf('Chip Set', module)
    .add('Expected', () => <ChipSet 
                                data={data}
                                headerText='Assignments to Calendars'/>);