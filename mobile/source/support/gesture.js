/**
 * This module contains standard functions that evaluate the kind of gesture the app is faced with.
 */
const SWIPE_DISPLACEMENT = 75; // an absolute value representing the 
const SWIPE_TOLERANCE = .5;

/**
 * 
 * @param {String} responseStage 
 * @param {*} event 
 * @param {*} gesture 
 */
export function isRightSwipe(responseStage, event, gesture) {
    switch (responseStage) {
        case "release":
            if (gesture.dx <= 0|| gesture.vx < -.1) {
                return false ;
            } else if (gesture.dx >= SWIPE_DISPLACEMENT || gesture.vx > SWIPE_TOLERANCE) {
                return true;
            }
            return false;
        default:
            break;
    }

}

export function isLeftSwipe(responseStage, event, gesture) {
    switch (responseStage) {
        case "release":
            if (gesture.dx >= 0|| gesture.vx > .1) {
                return false ;
            } else if (gesture.dx <= -1*SWIPE_DISPLACEMENT || gesture.vx < -1*SWIPE_TOLERANCE) {
                return true;
            }
            return false;
        default:
            break;
    }
}

export function isTap(responseStage, event, gesture) {
    
}
