import React,{ Component } from "react";
import { Alert, SafeAreaView, Platform, StyleSheet } from "react-native";
import LinkSet from "../Links/LinkSet";
import SignatureButton from "../items/SignatureButton";
import colors from "../../config/colors";
import typography from "../../config/typography";

export default class InteractionMangementScreen extends Component {
    render() {
        return(
            <SafeAreaView 
                style={styles.screen}>
                    <LinkSet 
                        data={data}
                        headerText={typography.LINK_SET_HEADER}
                        primaryHighlightColor={colors.LinkPrimaryIconColor}
                        primaryIconColor={colors.LinkPrimaryIconColor}
                        primaryAction={()=>{Alert.alert('Primary Action Taken')}}
                        secondaryHighlightColor={colors.LinkSecondaryHighlightColor}
                        secondaryIconColor={colors.LinkSecondaryIconColor}
                        secondaryAction={()=>{Alert.alert('Secondary Action Taken')}}/>
                    <SignatureButton
                        style={styles.signature}
                        colors={colors.signatureGradient}
                        action={()=>{Alert.alert('Signature Button Pressed')}}/>
            </SafeAreaView>
        );
    }
}

const data = [
    {
        serviceID: 'blackboard',
        inUse: true
    },{
        serviceID: 'g_calendar',
        inUse: true
    },{
        serviceID: 'ms_todo',
        inUse: false
    }
];

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 48,
        backgroundColor: colors.background
    },
    signature: {
        alignSelf: 'flex-start',
        marginLeft: 16,
        ...Platform.select({
            android: {marginBottom: 24},
        })
    }
});