import React from "react";
import Link from "./Link";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import typography from "../../config/typography";

storiesOf("Link", module)
    .add("Expected", () => <Link
                                action={action('button-click')}
                                iconName='chevron-right'
                                iconColor='#FF9100'
                                text='Todoist'
                                imageURL={typography.getLogo('todoist')}
                                highlightColor='#FF9100'/>)
    .add("Primary Mode", () => <Link
                                    action={action('button-click')}
                                    iconName='plus'
                                    iconColor='#4DA835'
                                    text='Blackboard'
                                    imageURL={typography.getLogo('blackboard')}
                                    highlightColor='#8AE65C'/>)
    .add("Secondary Mode", () => <Link 
                                    action={action('button-click')}
                                    iconName='chevron-right'
                                    iconColor='#FF9100'
                                    text='Todoist'
                                    imageURL={typography.getLogo('g_calendar')}
                                    highlightColor='#FF9100'/>);