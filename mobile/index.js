/**
 * @format
 */

import App from './App';
import SplashScreen from "./source/shared_ui/screens/SplashScreen.js";
import PlayGroundScreen from "./source/shared_ui/screens/PlayGroundScreen.js";
import { Navigation } from "react-native-navigation";


Navigation.registerComponent("SplashScreen", () => SplashScreen);
Navigation.registerComponent("PlayGroundScreen", () => PlayGroundScreen);


Navigation.events().registerAppLaunchedListener(()=> {
    Navigation.setRoot({
        root: {
            stack: {
                children : [
                    {
                        component: {
                            name: "PlayGroundScreen"
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

/**
 * Use the PixelRatio library to Dynamically size everything.
 * 
 * Control the status bar.
 */