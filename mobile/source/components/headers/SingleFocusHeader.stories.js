import React from "react";
import SingleFocusHeader from "./SingleFocusHeader";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import typography from "../../config/typography";

storiesOf('Single Focus Header', module)
    .add('Expected', () => <SingleFocusHeader 
                                focusLogo={typography.getLogo(typography.GOOGLE_CALENDAR_IMAGE)} 
                                focusName={'Google Calendar'}
                                headerTitle={'Links'}/>);