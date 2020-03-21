import React from "react";
import { Text, View } from "react-native";
import GradientView from "./GradientView";
import { storiesOf } from "@storybook/react-native";


storiesOf("Gradient View", module)
    .add("Expected", () => <View 
                                style={{
                                    flex: 1,
                                    backgroundColor: '#FF9100',
                                    maxHeight: 100,
                                    width: 100
                                }} />);