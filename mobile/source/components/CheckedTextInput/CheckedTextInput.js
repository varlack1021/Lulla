import React, { useRef, useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import typography from "../../config/typography";

export default function CheckedTextInput({title, checker, placeholder}) {
    let [input, setInput] = useState("");

    return (
        <View style={{width:"100%"}}>
            <View style={[{
                alignItems: 'center',
                flexDirection: 'row'
            }]}>
                <Text style={[typography.BODY_BOLD_STYLE,]}>
                    {title}
                </Text>
                <Text style={[{
                    fontFamily: 'Raleway-ThinItalic',
                    fontSize: 14,
                    color: '#FF0000',
                }]}>{(input != '')? " "+checker(input) :""}</Text>
            </View>
            <TextInput style={[{
                borderBottomWidth: 3,
                borderBottomColor: (input == '')? '#B5B5B5': '#000000',
                color: (input == '')? '#B5B5B5': '#000000',
                paddingBottom: 0,
                paddingLeft: 0,
                fontSize: 16,
                fontFamily: 'Raleway-Regular'
            },]}
                placeholder={placeholder}
                placeholderTextColor='#B5B5B5'
                value={input}
                onChangeText={(text) => {
                    setInput(text);
                }}/>
        </View>
    );
}