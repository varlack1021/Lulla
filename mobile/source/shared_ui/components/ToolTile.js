import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Animated, Platform } from 'react-native';
import { shadeColor } from '../../support/aesthetic';

export default class ToolTile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tileColor: new Animated.Value(0),
            tileBorderColor: new Animated.Value(0),
            usedColor: (this.props.empty != null && this.props.empty == true)? '#9A9A9A': this.props.color
        };

        this._onPressedIn = this._onPressedIn.bind(this);
        this._onPressedOut = this._onPressedOut.bind(this);
    }
    _onPressedIn() {
        Animated.parallel([
            Animated.timing(this.state.tileColor, {
                toValue: 1,
                duration: 62.5
            }),
            Animated.timing(this.state.tileBorderColor, {
                toValue: 1,
                duration: 62.5
            })
        ]).start();
        
    }

    _onPressedOut() {
        Animated.parallel([
            Animated.timing(this.state.tileColor, {
                toValue: 0,
                duration: 500
            }),
            Animated.timing(this.state.tileBorderColor, {
                toValue: 0,
                duration: 500
            })
        ]).start();

        //navigateTo();
    }

    render() {

        const colorSpectrum = this.state.tileColor.interpolate({
            inputRange: [0,1],
            outputRange: [this.state.usedColor, shadeColor(.4, this.state.usedColor)]
        });
        const borderColorSpectrum = this.state.tileBorderColor.interpolate({
            inputRange: [0,1],
            outputRange: [shadeColor(-.4, this.state.usedColor), this.state.usedColor]
        })
        const tileDynamicStyles = {
            backgroundColor: colorSpectrum,
            borderColor: borderColorSpectrum
        };

        let tileText = null;
        let tileTextDynamicStyles = null;

        if (this.state.usedColor == '#9A9A9A') {
            tileText = '?';
            tileTextDynamicStyles = {
                fontSize: 70,
                fontFamily: 'Lobster1.3',
            };
        } else {
            tileText = this.props.text;
            tileTextDynamicStyles = {
                fontSize: 20,
                fontFamily: 'Raleway-Bold',
            };
        }

        return(
            <TouchableWithoutFeedback onPressIn={this._onPressedIn} onPressOut={this._onPressedOut}>
                <Animated.View style={[styles.tile, tileDynamicStyles]}>
                    <Text style={[styles.tileText, tileTextDynamicStyles]}>
                        {tileText}
                    </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    tileText: {
        color: "white"
    },
    tile: {
        height: 150,
        width: 150,
        borderRadius: 40,
        borderWidth: 7,
        justifyContent: "center",
        alignItems: "center",
        ...Platform.select({
            ios: {
                shadowRadius: 4,
                shadowOffset: { 
                    height: 6,
                    width: 0
                },
                shadowOpacity: 1, 
                shadowColor: "rgba(0,0,0,0.16)",

            },
            android: {
                elevation: 6
            }
        })
    }
});