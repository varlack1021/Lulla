import { createMaterialTopTabNavigator } from "react-navigation";
import TasksTab from "../screens/TasksTab";
import GoalsTab from "../screens/GoalsTab";

export default TasksGoalsTabNavigator = createMaterialTopTabNavigator({
    TaskTab: { screen: TasksTab },
    GoalTab: { screen: GoalsTab }
}, {
    tabBarComponent: HeaderComponent,
    initialRouteName: "TaskTab",
    initialLayout: {
        height: 100,
        width: 100
    },
    swipeEnabled: true,
    order: ["TaskTab", "GoalTab"]
});