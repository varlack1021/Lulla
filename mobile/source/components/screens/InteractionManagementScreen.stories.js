import React from "react";
import { storiesOf } from "@storybook/react-native";
import InteractionMangementScreen from "./InteractionManagementScreen";


storiesOf("Interaction Management Page", module)
    .add("Expected", () => <InteractionMangementScreen />);