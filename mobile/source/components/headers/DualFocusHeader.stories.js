import React from "react";
import DualFocusHeader from "./DualFocusHeader";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import typography from "../../config/typography";

storiesOf('Double Focus Header', module)
    .add('Expected', () => <DualFocusHeader 
                                primaryFocusLogo={typography.getLogo(typography.GOOGLE_CALENDAR_IMAGE)} 
                                primaryFocusName={'Google Calendar'} 
                                secondaryFocusLogo={typography.getLogo(typography.BLACKBOARD_IMAGE)} 
                                secondaryFocusName={'Black Board'}
                                headerTitle={'Interaction'}/>);