/**
 * @format
 */

import App from './App';
import SignitureScreen from "./source/SignitureScreen.js";
import TodoAdditionScreen from "./source/TodoAdditionScreen";
import WhenTab from "./source/WhenTab.js";
import DescriptionTab from "./source/DescriptionTab.js";
import { Navigation } from "react-native-navigation";


Navigation.registerComponent(`MainPage`, () => App);
Navigation.registerComponent(`SigniturePage`, () => SignitureScreen);
Navigation.registerComponent(`TodoAdditionPage`, () => TodoAdditionScreen);
Navigation.registerComponent(`DescriptionPage`, () => DescriptionTab);
Navigation.registerComponent(`WhenPage`, () => WhenTab);

Navigation.events().registerAppLaunchedListener(()=> {
    Navigation.setRoot({
        // root: {
        //     bottomTabs: {
        //         id: "helloworld",
        //         children:[
        //             {
        //                 component: {
        //                     name: "TodoAdditionPage"
        //                 }
        //             },{
        //                 component: {
        //                     name: "SigniturePage"
        //                 }
        //             }
        //         ]
        //     }
        // }
        root: {
            stack: {
                children : [
                    {
                        component: {
                            name: 'MainPage'
                        }
                    }
                ],
                options: {
                    topBar: {
                        height: 0,
                        visible: false
                    }
                }
            }
        }
    });
});