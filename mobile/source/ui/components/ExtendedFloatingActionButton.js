import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Navigation } from "react-native-navigation";

export default class ExtendedFloatingActionButton extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>{
                Navigation.push(this.props.componentId, {
                    topTabs: {
                        children:[
                            {
                                component: {
                                    name: "TodoAdditionPage"
                                }
                            },
                            {
                                component: {
                                    name: "WhenPage"
                                }
                            },
                            {
                                component: {
                                    name: "DescriptionPage"
                                }
                            }
                        ]
                    }
                });
            }}>
                <View style={{height: 48, backgroundColor:"#6297EF", borderRadius: 24, alignItems:"center", justifyContent: "center", alignSelf:"flex-start"}}>
                    <Text style={{fontSize: 14, color:"#FFFFFF", marginLeft: 20, marginRight:20}}>{this.props.text.toUpperCase()}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
} 