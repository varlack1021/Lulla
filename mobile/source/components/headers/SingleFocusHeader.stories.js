import React from "react";
import SingleFocusHeader from "./SingleFocusHeader";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import typography from "../../config/typography";
import { GOOGLE_CALENDAR_ID } from "../../config/values";

storiesOf('Single Focus Header', module)
    .add('Expected', () => <SingleFocusHeader 
                                focusLogo={typography.getLogo(GOOGLE_CALENDAR_ID)} 
                                focusName={'Google Calendar'}
                                headerTitle={'Links'}/>);