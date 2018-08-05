import { createMaterialTopTabNavigator } from "react-navigation";
import WhatScreen from "../screens/WhatScreen";
import WhenScreen from "../screens/WhenScreen";
import StepsScreen from "../screens/StepsScreen";

export default TaskAdditionNavigator = createMaterialTopTabNavigator({
    WhatTab: { screen: WhatScreen},
    WhenTab: { screen: WhenScreen},
    StepsTab: { screen: StepsScreen}
}, {
    initialRouteName: "WhatTab",
    swipeEnabled: true,
    order: ["WhatTab", "WhenTab", "StepsTab"],
    tabBarComponent: null
});