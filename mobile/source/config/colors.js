import { 
    BLACKBOARD_ID, 
    GOOGLE_CALENDAR_ID, 
    MICROSOFT_TODO_ID, 
    TODOIST_ID 
} from "./values";

const primaryColor = '#FF9100';
const primaryHighlightColor = '#FFB85C';
const secondaryColor = '#4DA835';
const secondaryHighlightColor = '#8AE65C';
const disabledColor = '#B5B5B5';

const backgroundColor = '#FAFAFA';
const black = '#000000';
const white = '#FFFFFF';

const signatureGradient = [
    '#BA00FF', 
    '#FF9100'
];

function getTokenColors(serviceID) {
    switch (serviceID) {
        case TODOIST_ID:
            return '#FFB5B5';
        case BLACKBOARD_ID:
            return '#FFECBF';
        case MICROSOFT_TODO_ID:
            return '#C4E4F5';
        case GOOGLE_CALENDAR_ID:
            return '#B5C3FF';
        default:
            throw `There is no Service Name formated for the token component, connected to the Service ID {`+serviceID+`}:
            \n\t(1)The service you trying to get data for may not be supported
            \n\t(2)That service's name not have been formated yet for use in tokens`
    }
}


export default {
    getTokenColors: getTokenColors,
    IDBarEnabled: primaryColor,
    IDBarDisabled: disabledColor,
    IDBarHighlight: primaryHighlightColor,
    background: backgroundColor,
    //Links Colors
    LinkPrimaryIconColor: primaryColor,
    LinkPrimaryHighlightColor: primaryHighlightColor,
    LinkSecondaryIconColor: secondaryColor,
    LinkSecondaryHighlightColor: secondaryHighlightColor,
    signatureGradient: signatureGradient
}