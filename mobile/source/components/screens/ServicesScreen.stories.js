import React from "react";
import { storiesOf } from '@storybook/react-native';
import ServicesScreen from "./ServicesScreen";

storiesOf("Services Screen", module)
    .add("Expected", () => <ServicesScreen
                                focusID={'blackboard'}/>);