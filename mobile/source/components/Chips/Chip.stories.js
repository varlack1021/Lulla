import React from "react";
import Chip from "./Chip";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

storiesOf("Chip", module)
    .add("Expected", () => <Chip 
                                action={action('button-click')}
                                color={'#FF9100'}
                                highlightColor={'#FFB85C'}
                                iconName={'times'}
                                text='Hello world'/>);