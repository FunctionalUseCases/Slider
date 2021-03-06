import copy from '../Helpers/Copy.js';
import {GetCurrentSlide} from '../ActionHelper/GetCurrentSlide.js';
import TransitionToFailedException from '../Exceptions/TransitionToFailedException.js';
import CanLoopThrough from '../Specifications/CanLoopThrough.js';
import {State} from '../State';

export const TransitionTo = (Slide, slideToGet) => {

    if (Slide === undefined) {
        throw new TransitionToFailedException('Slide state must be provided');
    }

    if (slideToGet === undefined) {
        throw new TransitionToFailedException('Transition slide must be provided');
    }

    let slide = copy(Slide);
    let currentslide = GetCurrentSlide(slide);

    if (slideToGet > slide.numberOfSlides) {
        throw new TransitionToFailedException('Transition slide does not exist');
    }

    if (slideToGet < 0) {
        throw new TransitionToFailedException('Transition slide cannot be a negative number')
    }

    if (slideToGet === 0) {
        throw new TransitionToFailedException('Transition slide cannot be zero');
    }

    if (slideToGet === currentslide) {
        throw new TransitionToFailedException('Cannot transition to the same slide');
    }

    if (!CanLoopThrough(slide, slideToGet)) {
        throw new TransitionToFailedException('Looping through slides has been removed as a client option');
    }

    slide.transitionTo = slideToGet;
    slide.currentSlide = undefined;
    slide.transitionStartedAt = Date.now();

    return State(slide);
}
