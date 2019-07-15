/**
 * @format
 */
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
 * 
 * ~~~
 * 
 * Learn to use flow, buck, and babel
 * Abstract out color, and color associations in the app to allow for easy across
 * 
 * ~~~Todo Component
 * Refactor this component to make its code more elegant: use the various APIs (Stylesheet, touchables, Platform), and Pro Design Patterns
 * Fix the header spacing
 * - Make the whole component touchable.
 * - Fix the touch feature to use onPressIn and offPressOut to handle short and long presses.
 *
 * ~~~Navigation Feature
 * How should we organize our code base to handle sending of the ability to navigate thourghout the app.
 * Can we design the software to be navigation framework agnositic. technological agnosticism
 * 
 * ~~~Extended FAB Component
 * I don't know how to fully evaulate the effects of flex box statements.
 * - Add shadowing and basic animation to the FAB
 * 
 * ~~~Cancel Button
 * Make a unique font.
 * Make a the image a font
 * Add Animatation to the text
 * 
 * ~~~Constants
 * Determine Your Theme Color and Type
 * Determine the scope of the constants module
 * Determine your flow of responsblity between the app the it's features
 * 
 * ~~time
 * consider using moment.js and chroma for time and color opperations respectivitly
 * 
 */