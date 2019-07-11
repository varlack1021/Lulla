import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback, Animated, PanResponder} from "react-native";
import { pipelinePrimaryTopicReference } from "@babel/types";

export default class Task extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    
    _generateCheckBox() {
        let color = null;

        if (this.props.data.completed == true) {
            color = "#4DA835";
        }
        color = "#2D77EA";

        return (
            <TouchableWithoutFeedback>
                <View style={{ width: 20, height: 20, backgroundColor: color }}/>
            </TouchableWithoutFeedback>
        );
    }

    _generateContent() {
        if(this.props.data.dueDate == null) {
            return(
                <View>
                    <Text>
                        Task Title
                    </Text>
                </View>
            );
        }
        return(
            <View>
                    <Text>
                        Task Title
                    </Text>
                    <Text>
                        Task Due Date
                    </Text>
            </View>
        );
    }

    _generateStepTracker() {
        if(this.props.data.children.length > 0) {
            return(
                <Text>Another One</Text>
            );
        }
    }

    render() {
        const ComponentWrapper = (props) => {
            return(
                <TouchableWithoutFeedback>
                    <Animated.View>
                        {props.children}
                    </Animated.View>
                </TouchableWithoutFeedback>
            );
        };
        let CompletionStatusIndicator = null;
        let Content = null;
        let StepTracker = null;

        let dueDateColoring = null;
        let StepTrackerColoring = null;

        let completedSteps = null;
        let steps = null;

        return (
            <ComponentWrapper>
                {this._generateCheckBox()}
                {this._generateContent()}
                {this._generateStepTracker()}
            </ComponentWrapper>
        );
        // (
        // <View>
        //     <Text>
        //         {this.props.data.title}
        //     </Text>
        //     <Text>
        //         {this.props.data.dueDate}
        //     </Text>
        // </View>
        // );


        // cut 
        // - onion
        // - pepper
        // - 

        // (
        // <View>
        //     <Text>
        //         {this.props.data.title}
        //     </Text>
        // </View>
        // );

        // (
        // <View>
        //     <View>
        //         <Text style={{borderBottomWidth: 4}}> {completedSteps} </Text>

        //         <Text style={{borderTopWidth: 4}}> {steps} </Text>
        //     </View>
        //     <Symbol/>
        // </View>
        // );
    }
}