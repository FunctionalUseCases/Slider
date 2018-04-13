import copy from '../Helpers/Copy.js';
import {State} from '../State';

//@todo - tests for completeTransition
export const CompleteTransition = function(state) {
    if (state === undefined) {
        throw new Error('state is undefined');
    }

    let slide = copy(state);

    if (Date.now() - slide.transitionStartedAt < slide.slideDuration) {
        throw new Error('slide has not finished transitioning');
    }

    slide.currentSlide = slide.transitionTo;
    slide.transitionTo = undefined;
    slide.direction = undefined;

    return State(slide);
}
