import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import FloatingActionButton from "./FloatingActionButton";
import HeaderTextButtonComponent from "./HeaderTextButtonComponent";

class HeaderComponent extends Component {
    constructor() {
        super();

        this.state = {
            button1 : true,
            button2 : false
        };

        this.button1HandlePress = this.button1HandlePress.bind(this);
        this.button2HandlePress = this.button2HandlePress.bind(this);
    }

    button1HandlePress() {
        if (this.state.button1 == true && this.state.button2 == false) { return }
        this.setState({
            button1: true,
            button2: false
        });
        this.props.navigation.navigate("TaskTab");
    }

    button2HandlePress() {
        if( this.state.button2 == true && this.state.button1 == false) {return}
        this.setState({
            button1 : false,
            button2 : true
        });
        this.props.navigation.navigate("GoalTab");
    }

    render() {
        return(
            <View >
                <View style={styles.buttonHolder}>
                    <HeaderTextButtonComponent selected={ this.state.button1 } onPress={ this.button1HandlePress }>
                        Tasks
                    </HeaderTextButtonComponent>
                    <HeaderTextButtonComponent selected={ this.state.button2 } onPress={ this.button2HandlePress }>
                        Goals
                    </HeaderTextButtonComponent>
                </View>
                {/* <FloatingActionButton /> */}
            </View>
        );
    }
}
/* {
    position: 'absolute',
    width: '100%',
    height: '100%'
} */

const styles = StyleSheet.create({
    buttonHolder: {
        width: "100%",
        height: 95,
        backgroundColor: "black",
        flexDirection: "row",
    }
});

export default HeaderComponent;