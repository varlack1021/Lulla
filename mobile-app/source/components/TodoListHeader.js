import React from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";
import * as constants from "../Constants";


export default function TodoListHeader(props) {
    return(
        <View>
            <Text style={styles.text}>
                {constants.TODO_LIST_HEADER}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#000",
        fontSize: 48,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    container: {
        width: "100%",
        height: 95,
        flexDirection: "row",
    },
});