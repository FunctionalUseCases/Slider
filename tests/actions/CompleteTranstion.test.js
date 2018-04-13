var chai = require('chai');
var assert = chai.assert;

import {Init} from '../../src/Actions/Init';
import {TransitionTo} from '../../src/Actions/TransitionTo';
import {CompleteTransition} from '../../src/Actions/CompleteTransition';
import {TransitionToNextSlide} from '../../src/Actions/TransitionToNextSlide';

describe('CompleteTransition', function() {
    it('should fail if state is undefined', function() {
        assert.throws(function() {
            let slider = Init(3);
            slider = TransitionTo(slider, 2);
            slider = CompleteTransition();
        }, /state is undefined/);
    });
    it('should set currentSlide', function(done) {
        let slider = Init(2);
        slider = TransitionToNextSlide(slider);
        setTimeout(function() {
            slider = CompleteTransition(slider);
            assert.equal(2, slider.currentSlide);
            done();
        }, slider.slideDuration)
    });
    it('should set TransitionTo as defined', function(done) {
        let slider = Init(2);
        slider = TransitionToNextSlide(slider);
        setTimeout(function() {
            slider = CompleteTransition(slider);
            assert.equal(undefined, slider.transitionTo);
            done();
        }, slider.slideDuration)
    });
    it('should unset the transition time', function() {
        let slider = Init(2);
        slider = TransitionTo(slider, 2);
        setTimeout(function() {
            slider = CompleteTransition(slider);
            assert.equal(undefined, slider.transitionStartedAt);
            done();
        }, slider.slideDuration);
    });
});