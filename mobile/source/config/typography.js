// icons and typographic data

const TODOIST_IMAGE = 'todoist';
const BLACKBOARD_IMAGE = 'blackboard';
const MICROSOFT_TODO_IMAGE = 'ms_todo';
const GOOGLE_CALENDAR_IMAGE = 'g_calendar';

function getLogo(imageEnum) {
    switch (imageEnum) {
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

const cross = 'times';

const link_goto_icon = 'chevron-right';
const link_add_icon = 'plus';

export default {
    getLogo: getLogo,
    TODOIST_IMAGE: TODOIST_IMAGE,
    BLACKBOARD_IMAGE: BLACKBOARD_IMAGE,
    MICROSOFT_TODO_IMAGE: MICROSOFT_TODO_IMAGE,
    GOOGLE_CALENDAR_IMAGE: GOOGLE_CALENDAR_IMAGE
}