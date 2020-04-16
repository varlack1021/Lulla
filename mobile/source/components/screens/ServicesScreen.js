import React, { Component } from 'react';
import { View, Platform, TouchableWithoutFeedback, Alert, SafeAreaView } from 'react-native';
import SideBarScreen from './SideBarScreen';
import TokenSet from '../Tokens/TokenSet';
/**
 * @Focus_ID
 * 
 * 
 */
export default class ServicesScreen extends Component {
    render() {
        return(
            <SideBarScreen
                backgroundColor={'#FF9100'}
                iconName={'chevron-left'}
                action={() => {}}>
                    <TokenSet
                        data={getOptionsByID(this.props.focusID)}
                        primaryIconColor='#FF9100'
                        primaryAction={() => {}}
                        secondaryIconColor='#4DA835'
                        secondaryAction={() => {}}
                        title={'Links'}
                        focusID={this.props.focusID}/>
            </SideBarScreen>
        );
    }
}

function getOptionsByID(serviceID) {
    //We Need a method to get this Options based on ID, we need to design a method for this.
    //Rename to reflect the singlar use of this item.

    const allOptions = [
        {
            serviceID: 'blackboard',
            areLinked: true
        },{
            serviceID: 'g_calendar',
            areLinked: true
        },{
            serviceID: 'ms_todo',
            areLinked: false
        },{
            serviceID: 'todoist',
            areLinked: false
        }
    ];

    return allOptions.filter(item => !(item.serviceID == serviceID) );
}