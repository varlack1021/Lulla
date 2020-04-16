import React from "react";
import TextLink from "./TextLink";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { Text } from "react-native";

storiesOf('Text Link', module)
    .add('Expected', () => <Text style={{
                                fontFamily: 'Raleway-Bold',
                                fontSize: 88,
                                color: 'black',
                            }}>
                                <TextLink 
                                    action={()=>{}}
                                    color={'#FF9100'}
                                    highlightColor={'#FFB85C'}
                                    >Login</TextLink>
                                <Text>{'\nor\n'}</Text>
                                <TextLink 
                                    action={()=> {}}
                                    color={'#FF9100'}
                                    highlightColor={'#FFB85C'}>Sign Up</TextLink>
                            </Text>);