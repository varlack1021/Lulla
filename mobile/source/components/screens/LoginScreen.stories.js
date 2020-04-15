import React from "react";
import LoginScreen from "./LoginScreen";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

storiesOf("Login Page", module)
    .add("Expected", () => <LoginScreen/>);