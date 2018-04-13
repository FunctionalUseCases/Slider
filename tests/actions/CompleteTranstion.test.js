var chai = require('chai');
var assert = chai.assert;

import * as actions from '../../src/Actions';

describe('CompleteTransition', function() {
    it('should fail if state is undefined', function() {
        assert.throws(function() {
            let slider = actions.Init(3);
            slider = actions.TransitionTo(slider, 2);
            slider = actions.CompleteTransition();
        }, /state is undefined/);
    });
    it('should set currentSlide', function(done) {
        let slider = actions.Init(2);
        slider = actions.TransitionToNextSlide(slider);
        setTimeout(function() {
            slider = actions.CompleteTransition(slider);
            assert.equal(2, slider.currentSlide);
            done();
        }, slider.slideDuration)
    });
    it('should set TransitionTo as defined', function(done) {
        let slider = actions.Init(2);
        slider = actions.TransitionToNextSlide(slider);
        setTimeout(function() {
            slider = actions.CompleteTransition(slider);
            assert.equal(undefined, slider.transitionTo);
            done();
        }, slider.slideDuration)
    });
    it('should unset the transition time', function() {
        let slider = actions.Init(2);
        slider = actions.TransitionTo(slider, 2);
        setTimeout(function() {
            slider = actions.CompleteTransition(slider);
            assert.equal(undefined, slider.transitionStartedAt);
            done();
        }, slider.slideDuration);
    });
});