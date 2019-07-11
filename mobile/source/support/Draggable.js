import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Animated, PanResponder, StyleSheet, Alert } from "react-native";

export default class Draggable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pan: new Animated.ValueXY(),
            backgroundColor: new Animated.Value(0),

            completed: false,
            selected: false
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gesture) => {
                return false;
            },
            onMoveShouldSetPanResponder: (even, gesture) => {
                return true;
            },
            onPanResponderTerminationRequest: (event, gesture) => {
                return false;
            },
            //onMoveShouldSetResponderCapture: () => true,
            //onMoveShouldSetPanResponderCapture: (event, gesture) => true,
            onPanResponderGrant: (error, gesture) => { // When d
                // light up blue
                this.state.pan.setOffset({x: this.state.pan.x._value});
                this.state.pan.setValue({x: 0});
            },
            onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x},
            ]),
            onPanResponderRelease: (event, gesture) => {
                this.state.pan.flattenOffset();

                /*
                * Rewrite:
                * * reduced conditional
                * * state modifier object builder
                * * Animation List builder
                */

                if (gesture.dx > 0) {
                    this.state.pan.x.stopAnimation();

                    //This ran when I pulled back
                    if (gesture.dx > 50  && gesture.vx > 0 && this.state.pan.x._value > 0) {
                        console.log("animation should run");
                        
                        Animated.sequence([
                            Animated.parallel([
                                Animated.timing(this.state.pan.x, {
                                    toValue: 0,
                                    duration: 500
                                }),
                                Animated.timing(this.state.backgroundColor, {
                                    toValue: (this.state.completed == true)? -1:1,
                                    duration: 300
                                })
                            ]),
                            Animated.timing(this.state.backgroundColor, {
                                toValue: 0,
                                duration: 0
                            })
                        ]).start();

                        this.setState({
                            completed: !this.state.completed,
                            selected: false
                        });
                    } else {
                        Animated.spring(this.state.pan.x, {
                            toValue: 0,
                        }).start();
                    }
                } else if (gesture.dx < -50 && gesture.vx < 0) {
                    this.state.pan.x.stopAnimation();

                    Animated.sequence([
                        Animated.parallel([
                            Animated.timing(this.state.pan.x, {
                                toValue: -200,
                                duration: 250 // consider making the animation go the same speed you started it a
                            }),
                            Animated.timing(this.state.backgroundColor, {
                                toValue: (this.state.selected == true)? 3:2,
                                duration: 250/2 // exsplore non list interefaces, time machine like interface
                            })
                        ])
                    ]).start();

                    this.setState({
                        selected: !this.state.selected
                    });
                } else {
                    this.state.pan.x.stopAnimation();

                    if (this.state.backgroundColor._value != 0) {
                        Animated.parallel([
                            Animated.timing(this.state.pan.x, {
                                toValue: 0,
                                duration: 250 // consider making the animation go the same speed you started it a
                            }),
                            Animated.timing(this.state.backgroundColor, {
                                toValue: 0,
                                duration: 250/2 // exsplore non list interefaces, time machine like interface
                            })
                        ]).start();

                        this.setState({
                            selected: false
                        });
                    } else {
                        Animated.timing(this.state.pan.x, {
                            toValue: 0,
                            duration: 250 // consider making the animation go the same speed you started it a
                        }).start();
                    }
                }
                
                // return to previous colors
            }
        });
    }

    render() {
        let { pan } = this.state;

        let [translateX] = [pan.x];
        let imageStyle = {transform: [{translateX}]}

        let colorSpectrum = this.state.backgroundColor.interpolate({
            inputRange: [-1, 0 , 1, 2, 3],
            outputRange: ["rgb(45,119,234)", "rgb(154,154,154)", "rgb(53,168,86)", "rgb(189,240,113)" , "rgb(255, 0, 0)" ]
        });        

        return(
            <TouchableWithoutFeedback onPress={() => {Alert.alert("Do you Boo!")}} disabled={true}>
                <Animated.View style={[{backgroundColor: colorSpectrum}]}>
                    <Animated.View {...this._panResponder.panHandlers} style={[styles.dragMe, imageStyle]} />
                </Animated.View>
            </TouchableWithoutFeedback>
        );

    }
}

const styles = StyleSheet.create({
    dragMe: {
        height: 100,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2
    }
});