import React from "react";
import RoundFlatActionButton from "./RoundFlatActionButton";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";


storiesOf("Round Flat Action Button", module)
    .add("Expected", () => <RoundFlatActionButton
                                color='#FF9100'
                                highlightColor='#FFB85C'
                                iconName='plus'
                                action={action('button-click')}/>);