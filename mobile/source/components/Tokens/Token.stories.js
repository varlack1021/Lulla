import React from "react";
import Token from "./Token";
import typography from "../../config/typography";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";



storiesOf("Token", module)
    .add("Expected", () => <Token 
                                action={action('button-click')}
                                color='#FFECBF'
                                text={'Black\nBoard'}
                                logoImage={typography.getLogo(typography.BLACKBOARD_IMAGE)}
                                iconName='pen'
                                iconColor='#FF9100'/>);