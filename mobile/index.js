/**
 * @format
 * 
 * @cleanThis
 */
import StorybookView from './StorybookView';

import { Navigation } from "react-native-navigation";
import App from './App';

Navigation.registerComponent("StoryBooks", () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "StoryBooks"
            }
        }
    });
});