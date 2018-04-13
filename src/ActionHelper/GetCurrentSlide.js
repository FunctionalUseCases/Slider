export const GetCurrentSlide = function (Slide) {
    return Slide.currentSlide || Slide.transitionTo;
}
