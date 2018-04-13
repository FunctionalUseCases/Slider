/**
 * Create state
 * @param  {int|undefined} currentSlide
 * @param  {int} numberOfSlides
 * @param  {int|undefind} transitionTo
 * @param  {int} slideDuration
 * @param  {boolean} autoplay
 * @param  {int} autoplaySpeed
 * @param  {boolean} loopThrough
 * @param  {undefined} direction
 */
export const State = ({
    currentSlide,
    numberOfSlides,
    transitionTo,
    transitionStartedAt,
    slideDuration,
    autoplay,
    autoplaySpeed,
    loopThrough,
    direction
}) => ({
    /**
     * Current slide of slider
     */
    currentSlide,

    /**
     * Number of slides in slider
     */    
    numberOfSlides,

    /**
     * Slide to transition to
     */
    transitionTo,

    /**
     * Time transition started at
     */
    transitionStartedAt,

    /**
     * Slide animation duration
     */
    slideDuration,

    /** 
     * Is slider on autoplay
     */
    autoplay,

    /**
     * Length of time it takes autoplay to go through each slide
     */
    autoplaySpeed,

    /**
     * Can this slide be looped through - as in, once you get to the end,
     * it goes back to the beginning and vice versa.
     */
    loopThrough,

    /**
     * Current direction of the slide. undefined means it's not 
     * currently going in any direction
     */
    direction
});