import React from "react";
import IDBar from "./IDBar";
import colors from "../../config/colors";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

storiesOf("ID Bar", module)
    .add("Expected", () => <IDBar
                                shouldEnable={(text) => text != ""}
                                placeholder={"Enter Your Tester"}
                                enableColor={colors.IDBarEnabled}
                                enableHighlightColor={colors.IDBarHighlight}
                                enableIcon='door-open'
                                disableIcon='door-closed'
                                disableColor={colors.IDBarDisabled}
                                action={action('button-click')}
                            />)
    .add("Enabled", () => <IDBar
                                shouldEnable={(text) => true}
                                placeholder={"Hello World"}
                                enableColor={colors.IDBarEnabled}
                                enableHighlightColor={colors.IDBarHighlight}
                                enableIcon='door-open'
                                disableIcon='door-closed'
                                disableColor={colors.IDBarDisabled}
                                action={action('button-click')}
                            />)
    .add("Disabled", () => <IDBar
                                shouldEnable={() => false}
                                placeholder={"Hello World"}
                                enableColor={colors.IDBarEnabled}
                                enableHighlightColor={colors.IDBarHighlight}
                                enableIcon='door-open'
                                disableIcon='door-closed'
                                disableColor={colors.IDBarDisabled}
                                action={action('button-click')}
                            />);