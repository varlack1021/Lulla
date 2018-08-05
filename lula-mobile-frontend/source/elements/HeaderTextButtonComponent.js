import React, { Component } from "react";
import { 
    Text,
    View,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native";

class HeaderTextButtonComponent extends Component {

    render() {
        const properStyle = this.props.selected ? styles.selected : styles.notSelected;
        return(
            <TouchableWithoutFeedback onPress={ this.props.onPress } style={ {      } } >
                <View style={
                    this.props.selected ? {
                        backgroundColor: "blue",
                    } : {
                        backgroundColor: "yellow",
                    }
                }>
                    <Text style={properStyle}>
                        {this.props.children}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    notSelected: {
        color : "#000",
        fontSize : 24,
        fontWeight: '600',
        alignSelf: 'flex-end'
    },
    selected : {
        color: "#000",
        fontSize: 48,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }
});

export default HeaderTextButtonComponent;