import React, {useState, useRef, useEffect} from "react";
import { 
    Text,
    View, 
    TouchableWithoutFeedback,
    Image,
    StyleSheet,
    Animated,
    Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../config/colors";

export default function Link({action, iconName, iconColor, highlightColor, text, imageURL}) {
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    const iconOpacity = useRef(new Animated.Value(1)).current;
    const componentBackgroundColor = useRef(new Animated.Value(1)).current;
    
    const componentBackgroundColorRange = componentBackgroundColor.interpolate({
        inputRange: [0,1],
        outputRange: [highlightColor, colors.background]
    });
    const iconOpacityRange = iconOpacity.interpolate({
        inputRange: [0,1],
        outputRange: [0, 1]
    });

    return(
        <View>
            <TouchableWithoutFeedback 
                onPressIn={() => {
                    Animated.parallel([
                        Animated.timing(componentBackgroundColor, {
                            toValue: 0,
                            duration: 65.5
                        }),
                        Animated.timing(iconOpacity, {
                            toValue: 0,
                            duration: 65.5,
                            useNativeDriver: true
                        })
                    ]).start();
                }}
                onPressOut={() => {
                    Animated.parallel([
                        Animated.timing(componentBackgroundColor, {
                            toValue: 1,
                            duration: 500
                        }),
                        Animated.timing(iconOpacity, {
                            toValue: 1,
                            duration: 500,
                            useNativeDriver: true
                        })
                    ]).start();

                    action();
                }}>
                <Animated.View 
                    style={[styles.container, {backgroundColor: componentBackgroundColorRange }]}>
                    <View style={[styles.subContainer]}>
                        <Image
                            source={imageURL} 
                            style={[styles.logo]}/>
                        <Text style={[styles.text]}>{text}</Text>
                    </View>
                    
                    <AnimatedIcon 
                        name={iconName}
                        size={24}
                        color={iconColor}
                        style={[styles.icon, {opacity: iconOpacityRange}]}/>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
        marginLeft: 24,
        marginRight: 16
    },
    text: {
        fontFamily: 'Raleway-Regular',
        fontSize: 24,

    },
    subContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    icon: {
        marginRight: 24,
    }
});