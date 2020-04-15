import React, { useRef } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

export default function TextLink({style, children, action, color, highlightColor}) {
    const textColor = useRef(new Animated.Value(0)).current;

    const textColorRange = textColor.interpolate({
        inputRange: [0, 1],
        outputRange: [color, highlightColor]
    });
    return (
        <TouchableWithoutFeedback 
            onPressIn={()=>{
                Animated.timing(textColor, {
                    toValue: 1,
                    duration: 65.5
                }).start();
            }}
            onPressOut={()=>{
                Animated.timing(textColor, {
                    toValue: 0,
                    duration: 500
                }).start();
                action();
            }}>
            <Animated.Text style={[{color: textColorRange}, style]}>{children}</Animated.Text>
        </TouchableWithoutFeedback>
    );
}