import React, { useRef } from 'react';
import { 
    TouchableWithoutFeedback, 
    StyleSheet, 
    Animated 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from "../../config/colors";

export default function RoundFlatActionButton({action, color, highlightColor, iconName}) {
    const ColorChangeIcon = Animated.createAnimatedComponent(Icon);
    const secondaryColor = useRef(new Animated.Value(0)).current;

    const secondaryColorRange = secondaryColor.interpolate({
        inputRange: [0, 1],
        outputRange: [color, highlightColor]
    });
    
    return(
        <TouchableWithoutFeedback
            onPressIn={() => {
                Animated.timing(secondaryColor, {
                    toValue: 1,
                    duration: 65.5
                }).start();
            }}
            onPressOut={() => {
                Animated.timing(secondaryColor, {
                    toValue: 0,
                    duration: 500
                }).start();
                action();
            }}>
            <Animated.View 
                style={[ styles.container,
                    {
                    backgroundColor: colors.background,
                    borderColor: secondaryColorRange
                }]}>
                <ColorChangeIcon 
                    name={iconName}
                    size={32}
                    color={secondaryColorRange}
                    style={styles.icon}/>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 6,
        borderRadius: 16,
        aspectRatio: 1
    },
    icon: {
        margin: 8
    }
});