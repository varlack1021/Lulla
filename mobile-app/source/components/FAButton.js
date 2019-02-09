import React from "react";
import { 
    View,
    StyleSheet,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
} from "react-native";

// add an onPress method
// redo this component
export default function FAButton(porps) {
    const Touchable = (Platform.OS === 'android')? TouchableNativeFeedback: TouchableOpacity;

    return(
        <View style={styles.container}>
            <Touchable>
                <View style={styles.innerContainer} />
            </Touchable>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        borderRadius: 58,
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
    innerContainer: {
        width: 56,
        height: 56,
        borderRadius: 50,
        backgroundColor: 'blue'
    },
});