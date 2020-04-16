import { 
    MICROSOFT_TODO_ID, 
    BLACKBOARD_ID, 
    GOOGLE_CALENDAR_ID, 
    TODOIST_ID 
} from './values';
// icons and typographic data

const cancelIcon = 'times';
const doorOpenIcon = 'door-open';
const doorClosedIcon = 'door-closed';
const chevronRightIcon = 'chevron-right';
const plusIcon = 'plus';

const LINK_SET_HEADER = 'Your Services'; // Variable Change name

const loginScreenHeader = 'Enter Your ID:';
const loginInputPlaceholder = 'Enter Your Tester ID';

const HEADER_ONE_STYLE = {
    fontFamily: 'Raleway-Bold',
    fontSize: 48,
    color: 'black',
};
const TITLE_STYLE = {
    fontFamily: 'Raleway-Bold',
    fontSize: 88,
    color: 'black',
};
const BODY_BOLD_STYLE = {
    fontFamily: 'Raleway-Bold',
    fontSize: 24,
    color: 'black',
}

function getLogo(serviceID) {
    switch (serviceID) {
        case TODOIST_ID:
            return require('../../assets/images/Todoist_Logo.png');
        case BLACKBOARD_ID:
            return require('../../assets/images/blackboard_logo_2.png');
        case MICROSOFT_TODO_ID:
            return require('../../assets/images/Microsoft_todo.png');
        case GOOGLE_CALENDAR_ID:
            return require('../../assets/images/Google_Calendar.png');
        default:
            throw `logo not accessable:\n\t(1)logo may not exist as a resource or not (yet) accessable via this method
            \n\t(2)that service may not be supported at this time.`
    }
}

function getTokenFormatedServiceName(serviceID) {
    switch (serviceID) {
        case TODOIST_ID:
            return 'Todoist';
        case BLACKBOARD_ID:
            return 'Black\nBoard';
        case MICROSOFT_TODO_ID:
            return 'M.S.\nTodo';
        case GOOGLE_CALENDAR_ID:
            return 'Google\nCalendar';
        default:
            throw `There is no Service Name formated for the token component, connected to the Service ID {`+serviceID+`}:
            \n\t(1)The service you trying to get data for may not be supported
            \n\t(2)That service's name not have been formated yet for use in tokens`
    }
}

function getServiceName(serviceID) {
    switch (serviceID) {
        case TODOIST_ID:
            return 'Todoist';
        case BLACKBOARD_ID:
            return 'BlackBoard';
        case MICROSOFT_TODO_ID:
            return 'Microsoft Todo';
        case GOOGLE_CALENDAR_ID:
            return 'Google Calendar';
        default:
            throw `There is no Service Name connected to the Service ID {`+serviceID+`}:
            \n\t(1)The service you trying to get data for may not be supported
            \n\t(2)That service's name not have been linked to a serivce id`
    }
}

export default {
    getLogo: getLogo,
    getTokenFormatedServiceName: getTokenFormatedServiceName,
    getServiceName: getServiceName,
    //Login page spefic type
    loginInputPlaceholder: loginInputPlaceholder,
    loginScreenHeader: loginScreenHeader,
    //General Styles for type
    TITLE_STYLE: TITLE_STYLE,
    HEADER_ONE_STYLE: HEADER_ONE_STYLE,
    BODY_BOLD_STYLE: BODY_BOLD_STYLE,
    //
    LINK_SET_HEADER: LINK_SET_HEADER,
    //Icon Names for 
    cancelIcon : cancelIcon,
    doorOpenIcon : doorOpenIcon,
    doorClosedIcon : doorClosedIcon,
    chevronRightIcon : chevronRightIcon,
    plusIcon : plusIcon,
}