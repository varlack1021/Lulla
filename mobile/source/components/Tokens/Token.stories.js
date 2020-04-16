import React from "react";
import Token from "./Token";
import typography from "../../config/typography";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { BLACKBOARD_ID } from "../../config/values";


storiesOf("Token", module)
    .add("Expected", () => <Token 
                                action={action('button-click')}
                                color='#FFECBF'
                                text={'Black\nBoard'}
                                logoImage={typography.getLogo(BLACKBOARD_ID)}
                                iconName='pen'
                                iconColor='#FF9100'/>);