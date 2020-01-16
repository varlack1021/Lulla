import React, {useState, useRef, useEffect} from "react";
import { 
    Text, 
    TextInput, 
    View, 
    TouchableWithoutFeedback, 
    StyleSheet,
    Animated,
    Platform
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../config/colors";
/**
 * ID Bar Component Api
 * 
 * 
 * Enable Function - Function that evaluates to a Boolean determining wheither the button is active
 * Action Function - a function the button should complete
 * 
 * Enabled Color - 
 * Enabled Highlight Color - 
 * Disabled Color - 
 * 
 * Enable Icon - 
 * Disable Icon -
 * 
 * Value - The text value in the bar
 * Placeholder Text - bar's placeholder test
 */
export default IDBar = ({shouldEnable, action, enableColor, enableHighlightColor, disableColor, enableIcon, disableIcon, placeholder}) => {
    const [value, setValue] = useState("");
    const [enabled, setEnabled] = useState(shouldEnable(""));
    let buttonColor = useRef(new Animated.Value(0)).current;
    
    const buttonColorSpectrum = buttonColor.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [disableColor, enableColor, enableHighlightColor]
    });

    const ButtonIcon = Animated.createAnimatedComponent(Icon);

    const fadeButtonColorTo = (toVal) => {
        Animated.parallel([
            Animated.timing(buttonColor, {
                toValue: toVal,
                duration: 600,
            })
        ]).start();
    };
    
    const highlightButtonColor = () => {
        Animated.timing(buttonColor, {
            toValue: 2,
            duration: 65.5
        }).start();
    }

    useEffect(() => {
        Animated.parallel([
            Animated.timing(buttonColor, {
                toValue: enabled? 1: 0,
                duration: 600,
            })
        ]).start();
    }, [enabled]);
    
    return(
        <View style={[styles.container]}>
            <TextInput 
                placeholder={placeholder}
                value={value} 
                onChangeText={(text) => {
                    setValue(text);
                    setEnabled(shouldEnable(text));
                }}
                placeholderTextColor='#B5B5B5'
                style={[styles.textInput]}
                multiline={false}/>
            <TouchableWithoutFeedback 
                    disabled={!enabled} 
                    onPressIn={() => {
                        highlightButtonColor();
                    }}
                    onPressOut={() => {
                        fadeButtonColorTo(1);
                        action();
                    }}>
                <Animated.View 
                    style={[styles.icon, {
                        backgroundColor: buttonColorSpectrum
                    }]}>
                        <ButtonIcon 
                            name={(enabled)? enableIcon: disableIcon}
                            size={32} 
                            color={"#FFFFFF"}/>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16+8,
        ...Platform.select({
            ios:{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.16,
                shadowRadius: 16,
            },
            android: {
                elevation: 6
            }
        })
    },
    textInput: {
        padding: 24,
        color: '#000000',
        fontSize: 24,
        height: '100%',
        fontFamily: 'Raleway-Bold',
        flex: .8,
        backgroundColor: colors.background,
        borderTopLeftRadius: 16 + 8,
        borderBottomLeftRadius: 16 + 8
    },
    icon: {
        aspectRatio: 1,
        padding: 24,
        borderTopRightRadius: 16 + 8,
        borderBottomRightRadius: 16 + 8
    }
});