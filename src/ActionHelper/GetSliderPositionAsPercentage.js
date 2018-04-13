import {GetCurrentSlide} from './GetCurrentSlide.js';

export const GetSliderPositionAsPercentage = function(state) {
    let percentage = (GetCurrentSlide(state) - 1) * -100;
    return percentage + '%';
}
