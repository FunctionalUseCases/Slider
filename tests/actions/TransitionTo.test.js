var chai = require('chai');
var assert = chai.assert;

import * as actions from '../../src/Actions';

describe('TransitionTo', function() {
    it('should throw an error if state is not provided', function() {
        assert.throws(function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo();
        }, /Slide state must be provided/);
    });

    it('should throw an error if slide number is not provided', function() {
        assert.throws(function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider);
        }, /Transition slide must be provided/);
    });

    it('should set the transition time', function() {
        let slider = actions.Init(2);
        slider = actions.TransitionTo(slider, 2);
        assert.equal(Date.now(), slider.transitionStartedAt);
    });

    it('should TransitionTo slide provided', function() {
        let slider = actions.Init(2);
        slider = actions.TransitionTo(slider, 2);
        assert.equal(2, slider.transitionTo);
    });

    it('should not transition to the same slide', function() {
        assert.throws(function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, 1);
        }, /Cannot transition to the same slide/);
    });

    it('should have an undefined currentSlide', function() {
        let slider = actions.Init(2);
        slider = actions.TransitionTo(slider, 2);
        assert.equal(undefined, slider.currentSlide);
    });

    it('should not transition to a slide that does not exist', function() {
        assert.throws(function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, 3);
        }, /Transition slide does not exist/);
    });

    it('should not transition to a negative numbered slide', function() {
        assert.throws(function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, -1);
        }, /Transition slide cannot be a negative number/);
    });

    it('should not transition to a 0 numbered slide', function() {
        assert.throws(function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, 0);
        }, /Transition slide cannot be zero/);
    });

    it('should be able to change transition slide mid transition', function() {
        let slider = actions.Init(3);
        slider = actions.TransitionTo(slider, 2);
        slider = actions.TransitionTo(slider, 3);
        assert.equal(3, slider.transitionTo);
    });
});