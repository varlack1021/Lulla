import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";


const taskDatabaseKey = "@Tasks";

async function _keyInDB(databaseKey) {
    let inIt = false;
    try {
        let key = await AsyncStorage.getAllKeys();
        if (key.includes(databaseKey) == true) {
            inIt = true;
        }
    } catch(error) {
        console.error(error); 
    }
    return inIt
}

/**
 * states: 
 * no data - return an empty list
 * empty list - return an empty list
 * data - return data
 * data no in JSON - (correct this later) {Can we auto catch this??}
 */
export async function getTasks() {
    let tasks = [];
    if( _keyInDB(taskDatabaseKey) == true ){
        try{
            let data = await AsyncStorage.getItem(taskDatabaseKey);
            tasks = JSON.parse(data);
        } catch(error) {
            console.error(error);
        }
    }
    return tasks;
}


// **WARNING** : What are issues with the various types of saving tasks
// save as state once, modify in component as JSON, then save at all break points.

//
export async function saveTasks(tasks) {
    try {
        await AsyncStorage.setItem(taskDatabaseKey, JSON.stringify(tasks));
    } catch(error) {
        console.error(error);
    }
}

