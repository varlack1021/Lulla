import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, Platform, StyleSheet } from 'react-native';

import { shadeColor } from "../../support/aesthetic.js";
import { FABTextFontFamily, FABTextFontSize } from '../../constants/type.js';
/**
 * This is a general purpose floating action button(FAB) component. It support styling for regular, mini, and extended FAB (with and without an icon).
 * 
 */
export default class FloatingActionButton extends Component {
    // Implement Later... RTL Compatablity
    constructor(props) {
        super(props);

        this.state = {
            backgroundColorAnimator: new Animated.Value(0)
        }
        
        this._onPressedIn = this._onPressedIn.bind(this);
        this._onPressedOut = this._onPressedOut.bind(this);
    }

    componentWillMount() {
        // run an entrance animation 
    }

    componentWillUnmount() {
        // run an exit animation
    }

    _onPressedIn() {
        Animated.timing(this.state.backgroundColorAnimator, {
            toValue: 1,
            duration: 62.5
        }).start();
    }

    _onPressedOut() {
        Animated.timing(this.state.backgroundColorAnimator,{
            toValue: 0,
            duration: 500
        }).start();

        this.props.action();
    }

    _checkForInputError() {
        // check null values


        // check type

        // check format
    }

    render() {

        if (this.props.backgroundColor == null || typeof this.props.backgroundColor != "string") {
            console.error("Floating Action Button components must have their 'backgroundColor' props defined.");
        }
        if (this.props.contentColor == null || typeof this.props.contentColor != "string") {
            console.error("Floating Action Button components must have their 'contentColor' props defined.");
        }


        const backgroundColorSpectrum = this.state.backgroundColorAnimator.interpolate({
            inputRange: [0,1],
            outputRange: [this.props.backgroundColor, shadeColor(.4, this.props.backgroundColor)]
        });

        const ButtonWrapper = (props) => {
            return(
                <TouchableWithoutFeedback onPressIn={this._onPressedIn} onPressOut={this._onPressedOut}>
                    <Animated.View style={[styles.buttonContainer, props.buttonStyle, (props.positioningStyles || {})]}>
                        {props.children}
                    </Animated.View>
                </TouchableWithoutFeedback>
            );
        };
        let dynamicContianerStyle = null;
        let dynamicTextStyle = null;
        let dynamicImageStyle = null;

        // Check this structure to shorten it
        if (this.props.text != null && this.props.image != null) {
            // implement later
            console.log("Statment 1, ran");
        } else if ( this.props.text != null && this.props.image == null ) {
            // implement later... Function to truncate text.
            console.log("Statment 2, ran");
            
            dynamicTextStyle =  {
                marginHorizontal: 20,
                color: this.props.contentColor
            };

            dynamicContianerStyle = {
                height: 48,
                backgroundColor: backgroundColorSpectrum
            };

            return (
                <ButtonWrapper buttonStyle={dynamicContianerStyle} positioningStyles={this.props.positioning}>
                    <Text style={[styles.buttonText, dynamicTextStyle]}>{this.props.text}</Text>
                </ButtonWrapper>
            );
        } else if ( this.props.text == null && this.props.image != null ) {
            // implement later
            console.log("Statment 3, ran");
        } else {
            // Throw an error, "`Floating Action Button` components must have either an `image` or `text` prop defined."
            console.error("Floating Action Button components must have either (or both) their 'image' or 'text' props defined");
        }
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        alignItems:"center",
        justifyContent: "center",
        alignSelf:"flex-start",
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
    },
    buttonText: {
        fontSize: FABTextFontSize,
        fontFamily: FABTextFontFamily
    }
});

/*

Fix error handling
This.props.size not implemented yet...
please explian the reason you put the animator in state??

Get a function for lightening input colors


Where in the 

Looking Animation/ Motion Design,
Timing in animations
Have a more offical way to represent the timing of the click...
 */