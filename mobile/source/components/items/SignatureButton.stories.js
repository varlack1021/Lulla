import React from "react";
import SignatureButton from "./SignatureButton";
import colors from "../../config/colors";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

storiesOf("Signature Button", module)
    .add("Expected", () => <SignatureButton
                                colors={['#BA00FF']}
                                action={action('button-click')}/>);