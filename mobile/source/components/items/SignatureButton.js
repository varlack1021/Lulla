import React, {useRef} from "react";
import { 
    TouchableWithoutFeedback,
    StyleSheet,
    Animated
} from "react-native";
import GradientView from "../native modules/GradientView";

export default function SignatureButton({action, colors}) {
    const ScalableGradient = Animated.createAnimatedComponent(GradientView);
    const componentScale = useRef(new Animated.Value(0)).current;

    const componentScaleRange = componentScale.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 8]
    });

    return(
        <TouchableWithoutFeedback 
            onPressIn={() => {
                Animated.timing(componentScale, {
                    toValue: 1,
                    duration: 300,
                    // easing: Easing.ease
                }).start();
            }}
            onPressOut={() => {
                Animated.timing(componentScale, {
                    toValue: 0,
                    duration: 1000,
                    // easing: Easing.ease
                }).start();
                action();
            }}>
            <ScalableGradient style={[styles.container, {
                backgroundColor: colors[0],
                transform: [{scale: componentScaleRange}]
                }]}/>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 24,
        maxHeight: 24,
        borderRadius: 1000,
        ...Platform.select({
            ios:{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.4,
                shadowRadius: 16,
            },
            android: {
                elevation: 6
            }
        })
    }
});