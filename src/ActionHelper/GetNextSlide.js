import {GetCurrentSlide} from './GetCurrentSlide.js';

export const GetNextSlide = function(Slide) {
    if (Slide === undefined) {
        throw new Error('Getting next slide requires state');
    }
    let currentSlide = GetCurrentSlide(Slide);
    return currentSlide === Slide.numberOfSlides ? 1 : currentSlide + 1;
}
