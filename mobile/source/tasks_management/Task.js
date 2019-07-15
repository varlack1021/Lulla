import React, { Component } from "react";
import {
    View,
    TouchableWithoutFeedback, 
    Text, 
    Animated, 
    PanResponder, 
    StyleSheet, 
    Alert } from "react-native";
import {
    appMainBackgroundColor, 
    primaryFontColor, 
    secondaryFontColor, 
    primaryColor, 
    secondaryColor } from "../constants/colors";
import { 
    taskTitleFontSize, 
    taskTitleFontFamily,
    taskTitleCharacterLimit,
    taskDueDateFontSize, 
    taskDueDateFontFamily, 
    taskStepsFontSize, 
    taskStepsFontFamily, 
    urgencyPeriodStart} from "../constants/type";
import { 
    truncateIfNeedBe,
    extractDate,
    daysBetween,
    transitionColorTo } from "../support/aesthetic";
import { 
    isRightSwipe,
    isLeftSwipe } from "../support/gesture";

export default class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pan: new Animated.ValueXY(),
            backgroundColor: new Animated.Value(0),
            selected: false,

            title: this.props.data.title,
            dueDate: this.props.data.dueDate,
            completed: this.props.data.completed,
            steps: this.props.data.children
        };

        this._deselect = this._deselect.bind(this);
        this._select = this._select.bind(this);
        this._toggleCompletion = this._toggleCompletion.bind(this);
        this._returnToNeutral = this._returnToNeutral.bind(this);
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gesture) => {
                return this.state.selected;
            },
            onMoveShouldSetPanResponder: (even, gesture) => {
                return true;
            },
            onPanResponderTerminationRequest: (event, gesture) => {
                return false;
            },
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
                this.state.pan.x.stopAnimation();

                if (isRightSwipe("release", event, gesture)) {
                    if(this.state.selected == true) {
                        this._deselect();
                    } else {
                        this._toggleCompletion();
                    }
                } else if (isLeftSwipe("release", event, gesture)) {
                    this._select();
                } else {
                    this._returnToNeutral();
                }

                /*
                * Rewrite:
                *   reduced conditional
                *   state modifier object builder
                *   Animation List builder
                */
            }
        });
    }

    _select() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(this.state.pan.x, {
                    toValue: -200,
                    duration: 250 // consider making the animation go the same speed you started it a
                }),
                Animated.timing(this.state.backgroundColor, {
                    toValue: (this.state.selected == true)? 3:2,
                    duration: 125 // exsplore non list interefaces, time machine like interface
                })
            ])
        ]).start();

        this.setState({
            selected: true
        });
        
    }

    _deselect() {
        Animated.parallel([
            Animated.timing(this.state.pan.x, {
                toValue: 0,
                duration: 250
            }),
            Animated.timing(this.state.backgroundColor, {
                toValue: 0,
                duration: 125
            })
        ]).start();

        this.setState({
            selected: false
        });
    }

    

    _toggleCompletion() {
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
    }

    _returnToNeutral() {
        if(this.state.selected == true) {
            Animated.parallel([
                Animated.timing(this.state.backgroundColor, {
                    toValue: 0,
                    duration: 250
                }),
                Animated.timing(this.state.pan.x, {
                    toValue: 0,
                    duration: 350
                })
            ]).start();
        } else {
            Animated.timing(this.state.pan.x, {
                toValue: 0,
                duration: 350
            }).start();
        }
        
        this.setState({
            selected: false
        });

    }

    render() {
        let { pan } = this.state;

        let [translateX] = [pan.x];
        let imageStyle = {transform: [{translateX}]};

        let colorSpectrum = this.state.backgroundColor.interpolate({
            inputRange: [-1, 0 , 1, 2, 3],
            outputRange: ["rgb(45,119,234)", "rgb(154,154,154)", "rgb(53,168,86)", "rgb(189,240,113)" , "rgb(255, 0, 0)" ]
        });

        const tempIncomplete = {width: 30, height: 30, borderWidth: 4, borderColor: primaryColor, borderRadius: 15, marginRight: 20}; // @delete
        const tempComplete = {width: 30, height: 30, borderWidth: 4, borderColor: secondaryColor, borderRadius: 15, marginRight: 20, backgroundColor: secondaryColor}; // @delete

        let dueDateFontColor = null;
        const dueDate = (this.state.dueDate != null)? extractDate(this.state.dueDate): "no due date 🤷‍";
        
        if(this.state.completed) {
            dueDateFontColor = {color: secondaryColor}
        } else if (this.state.dueDate != null && daysBetween(new Date(), dueDate) <= urgencyPeriodStart) {
            dueDateFontColor = {color: "red"}
        } else {
            dueDateFontColor = {color: secondaryFontColor}
        }
        


        if(this.state.steps.length > 0) {
            const stepsColor = transitionColorTo((this.state.steps.filter(steps => steps.completed == true).length/this.state.steps.length), secondaryFontColor, secondaryColor);

            return(
                <TouchableWithoutFeedback onPress={() => {Alert.alert("Do you Boo!")}} disabled={true}>
                    <Animated.View style={[{backgroundColor: colorSpectrum}]}>
                        <Animated.View {...this._panResponder.panHandlers} style={[styles.dragMe, imageStyle]}>
                            <View style={{backgroundColor: appMainBackgroundColor, flexDirection: "row", alignItems: "center", justifyContent:"space-between"}}>
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                    <View style={(this.state.completed == true)? tempComplete: tempIncomplete} />
                                    <View style={[styles.mainTextContainer]}>
                                        <Text style={[styles.title]}>{truncateIfNeedBe(this.state.title, taskTitleCharacterLimit)}</Text>
                                        <Text style={[styles.dueDate, dueDateFontColor]}>{dueDate}</Text>  
                                    </View>
                                </View>
                                <View style={[styles.stepsDataContainer]}>
                                    <Text style={[styles.stepNumber, {color: stepsColor}]}>{this.state.steps.filter(steps => steps.completed == true).length}</Text>
                                    <View style={{height: 4, backgroundColor: stepsColor}}/>
                                    <Text style={[styles.stepNumber, {color: stepsColor}]}>{this.state.steps.length}</Text>
                                </View>
                            </View>
                        </Animated.View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            );
        } else {
            return(
                <TouchableWithoutFeedback onPress={() => {Alert.alert("Do you Boo!")}} disabled={true}>
                    <Animated.View style={[{backgroundColor: colorSpectrum}]}>
                        <Animated.View {...this._panResponder.panHandlers} style={[styles.dragMe, imageStyle]}>
                            <View style={{backgroundColor: appMainBackgroundColor, flexDirection: "row", alignItems: "center", justifyContent:"space-between"}}>
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                    <View style={(this.state.completed == true)? tempComplete: tempIncomplete} />
                                    <View style={[styles.mainTextContainer]}>
                                        <Text style={[styles.title]}>{truncateIfNeedBe(this.state.title, taskTitleCharacterLimit)}</Text>
                                        <Text style={[styles.dueDate, dueDateFontColor]}>{dueDate}</Text>  
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            );
        }
    }
}

const styles = StyleSheet.create({
    dragMe: {
        backgroundColor: appMainBackgroundColor,
        borderBottomColor: "#BFBFBF",
        borderBottomWidth: .7,
        paddingBottom: 16
    },

    title: {
        fontSize: taskTitleFontSize, 
        color: primaryFontColor, 
        fontFamily: taskTitleFontFamily
    },
    dueDate: {
        fontSize: taskDueDateFontSize, 
        fontFamily: taskDueDateFontFamily
    },
    mainTextContainer: {
        flexDirection:"column"
    },

    stepNumber: {
        fontSize: taskStepsFontSize, 
        color: secondaryFontColor, 
        fontFamily: taskStepsFontFamily
    },
    stepsDataContainer: {
        flexDirection:"column", 
        marginRight: 10
    }
});