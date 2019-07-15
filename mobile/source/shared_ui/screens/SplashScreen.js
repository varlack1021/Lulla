import React, {Component} from 'react';
import { View, Text, Animated, StyleSheet } from "react-native";


export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.backgroundColor = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.backgroundColor, {
            toValue: 100,
            duration: 1000
        }).start();
    }

    render() {
        const colorSpectrum = this.backgroundColor.interpolate({
            inputRange: [0,100],
            outputRange: ["rgba(45, 119, 234, 1)", "rgba(77, 168, 53, 1)"]
        });

        return(
            <Animated.View style={[styles.splashScreenContainer, {backgroundColor: colorSpectrum}]}>
                <Text style={styles.logoText}>
                    Lulla
                </Text>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    splashScreenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    logoText: {
        fontSize: 160,
        color: "white",
        fontFamily: "Lobster1.3"
    }
});