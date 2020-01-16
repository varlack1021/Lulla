import React, {useRef} from "react";
import { 
    View, 
    Text, 
    TouchableWithoutFeedback, 
    Animated, 
    StyleSheet 
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Chip({action, color, highlightColor, iconName, text}) {
    const componentBackgroundColor = useRef(new Animated.Value(1)).current;
    const componentOpacity = useRef(new Animated.Value(1)).current;

    const componentBackgroundColorRange = componentBackgroundColor.interpolate({
        inputRange: [0,1],
        outputRange: [highlightColor, color]
    });
    const componentOpacityRange = componentOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    return(
        <TouchableWithoutFeedback 
            onPressIn={() => {
                Animated.timing(componentBackgroundColor, {
                    toValue: 0,
                    duration: 65.5
                }).start();
            }}
            onPressOut={() => {
                Animated.timing(componentBackgroundColor, {
                    toValue: 1,
                    duration: 500
                }).start();
                action();
            }}>
            <Animated.View 
                style={[styles.container, {
                    backgroundColor: componentBackgroundColorRange,
                    opacity: componentOpacityRange
                }]}>
                <TouchableWithoutFeedback 
                    onPressIn={() => {
                        Animated.timing(componentBackgroundColor, {
                            toValue: 0,
                            duration: 65.5
                        }).start();
                    }}
                    onPressOut={() => {
                        Animated.parallel([
                            Animated.timing(componentBackgroundColor, {
                                toValue: 1,
                                duration: 500
                            }),
                            Animated.timing(componentOpacity, {
                                toValue: 0,
                                duration: 500
                            })
                        ]).start();
                    }}>
                    <Icon 
                        name={iconName}
                        size={16}
                        color={"#FFFFFF"}
                        suppressHighlighting={true}
                        style={[styles.icon]}/>
                </TouchableWithoutFeedback>
                <Text style={[styles.text]}>{text}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    icon: {
        paddingLeft: 8,
        paddingRight: 8
    },
    text: {
        marginLeft: 8,
        marginRight: 8,
        color: '#FFFFFF',
        fontFamily: 'Raleway-Medium',
        fontSize: 16
    }
});