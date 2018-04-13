var chai = require('chai');
var assert = chai.assert;

import Init from '../../src/Actions/Init.js';
import TransitionToPreviousSlide from '../../src/Actions/TransitionToPreviousSlide';

describe('TransitionToPreviousSlide', function() {
    describe('When can loop through, and only two slides', () => {
        it('should go to previous slide 1 -> 2', function() {
            let slider = Init(2, 300, 300, true);
            slider = TransitionToPreviousSlide(slider);
            assert.equal(2, slider.transitionTo);
        });
    })
    describe('When can loop through, and only three slides', () => {
        it('should go to pevious slide 1 -> 3 -> 2', function() {
            let slider = Init(3, 300, 1000, true);
            slider = TransitionToPreviousSlide(slider);
            slider = TransitionToPreviousSlide(slider);
            assert.equal(2, slider.transitionTo);
        });
    })
});