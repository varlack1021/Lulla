import { createMaterialTopTabNavigator } from "react-navigation";
import WhatTab from "../screens/WhatTab";
import WhenTab from "../screens/WhenTab";
import StepsTab from "../screens/StepsTab";


export default TaskAdditionNavigator = createMaterialTopTabNavigator({
    WhatTab: { screen: WhatTab},
    WhenTab: { screen: WhenTab},
    StepsTab: { screen: StepsTab}
}, {
    initialRouteName: "WhatTab",
    swipeEnabled: true,
    order: ["WhatTab", "WhenTab", "StepsTab"],
    tabBarComponent: null
});