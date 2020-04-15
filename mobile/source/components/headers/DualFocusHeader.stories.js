import React from "react";
import DualFocusHeader from "./DualFocusHeader";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import typography from "../../config/typography";
import { BLACKBOARD_ID, GOOGLE_CALENDAR_ID } from "../../config/values";

storiesOf('Double Focus Header', module)
    .add('Expected', () => <DualFocusHeader 
                                primaryFocusLogo={typography.getLogo(GOOGLE_CALENDAR_ID)} 
                                primaryFocusName={'Google Calendar'} 
                                secondaryFocusLogo={typography.getLogo(BLACKBOARD_ID)} 
                                secondaryFocusName={'Black Board'}
                                headerTitle={'Interaction'}/>);