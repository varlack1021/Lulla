// icons and typographic data

const TODOIST_IMAGE = 'todoist';
const BLACKBOARD_IMAGE = 'blackboard';
const MICROSOFT_TODO_IMAGE = 'ms_todo';
const GOOGLE_CALENDAR_IMAGE = 'g_calendar';

function getLogo(serviceID) {
    switch (serviceID) {
        case TODOIST_IMAGE:
            return require('../../assets/images/Todoist_Logo.png');
        case BLACKBOARD_IMAGE:
            return require('../../assets/images/blackboard_logo_2.png');
        case MICROSOFT_TODO_IMAGE:
            return require('../../assets/images/Microsoft_todo.png');
        case GOOGLE_CALENDAR_IMAGE:
            return require('../../assets/images/Google_Calendar.png');
        default:
            throw `logo not accessable:\n\t(1)logo may not exist as a resource or not (yet) accessable via this method
            \n\t(2)that service may not be supported at this time.`
    }
}

function getTokenFormatedServiceName(serviceID) {
    switch (serviceID) {
        case TODOIST_IMAGE:
            return 'Todoist';
        case BLACKBOARD_IMAGE:
            return 'Black\nBoard';
        case MICROSOFT_TODO_IMAGE:
            return 'M.S.\nTodo';
        case GOOGLE_CALENDAR_IMAGE:
            return 'Google\nCalendar';
        default:
            throw `There is no Service Name formated for the token component, connected to the Service ID {`+serviceID+`}:
            \n\t(1)The service you trying to get data for may not be supported
            \n\t(2)That service's name not have been formated yet for use in tokens`
    }
}

function getServiceName(serviceID) {
    switch (serviceID) {
        case TODOIST_IMAGE:
            return 'Todoist';
        case BLACKBOARD_IMAGE:
            return 'BlackBoard';
        case MICROSOFT_TODO_IMAGE:
            return 'Microsoft Todo';
        case GOOGLE_CALENDAR_IMAGE:
            return 'Google Calendar';
        default:
            throw `There is no Service Name connected to the Service ID {`+serviceID+`}:
            \n\t(1)The service you trying to get data for may not be supported
            \n\t(2)That service's name not have been linked to a serivce id`
    }
}

const cancel = 'times';
// const back;
// const edit;
// const scroll;
// const enter;
// const exit;

const link_goto_icon = 'chevron-right';
const link_add_icon = 'plus';

function getIcon(iconEnum) {
    // switch (key) {
    //     case value:
    //
    //         break;
    //     default:
    //
    //         break;
    // }
}

export default {
    getLogo: getLogo,
    getTokenFormatedServiceName: getTokenFormatedServiceName,
    getServiceName: getServiceName,
    TODOIST_IMAGE: TODOIST_IMAGE,
    BLACKBOARD_IMAGE: BLACKBOARD_IMAGE,
    MICROSOFT_TODO_IMAGE: MICROSOFT_TODO_IMAGE,
    GOOGLE_CALENDAR_IMAGE: GOOGLE_CALENDAR_IMAGE
}