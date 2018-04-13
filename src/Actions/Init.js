import InitiationFailedException from '../Exceptions/InitiationFailedException.js';
import {State} from '../State';

//@todo test autoplaySpeed
export const Init = (numberOfSlides, slideDuration, autoplaySpeed, loopThrough) => {

    if (numberOfSlides === undefined) {
        throw new InitiationFailedException('numberOfSlides is required');
    }

    if (numberOfSlides === 0) {
        throw new InitiationFailedException('number of slides must >= 1');
    }

    return State({
        currentSlide: 1,
        numberOfSlides: numberOfSlides,
        transitionTo: undefined,
        slideDuration: slideDuration || 1200,
        autoplay: false,
        autoplaySpeed: autoplaySpeed || 4000,
        loopThrough: loopThrough || false,
        direction: undefined
    });
}
