var chai = require('chai');
var assert = chai.assert;

import {Init} from '../../src/Actions/Init';
import {TransitionTo} from '../../src/Actions/TransitionTo';
import { toTheNearestOne } from '../test-helpers/toTheNearestOne';

describe('TransitionTo', function() {
    it('should throw an error if state is not provided', function() {
        assert.throws(function() {
            let slider = Init(2);
            slider = TransitionTo();
        }, /Slide state must be provided/);
    });

    it('should throw an error if slide number is not provided', function() {
        assert.throws(function() {
            let slider = Init(2);
            slider = TransitionTo(slider);
        }, /Transition slide must be provided/);
    });

    it('should set the transition time', function() {
        let slider = Init(2);
        slider = TransitionTo(slider, 2);
        assert.equal(toTheNearestOne(Date.now()), toTheNearestOne(slider.transitionStartedAt));
    });

    it('should TransitionTo slide provided', function() {
        let slider = Init(2);
        slider = TransitionTo(slider, 2);
        assert.equal(2, slider.transitionTo);
    });

    it('should not transition to the same slide', function() {
        assert.throws(function() {
            let slider = Init(2);
            slider = TransitionTo(slider, 1);
        }, /Cannot transition to the same slide/);
    });

    it('should have an undefined currentSlide', function() {
        let slider = Init(2);
        slider = TransitionTo(slider, 2);
        assert.equal(undefined, slider.currentSlide);
    });

    it('should not transition to a slide that does not exist', function() {
        assert.throws(function() {
            let slider = Init(2);
            slider = TransitionTo(slider, 3);
        }, /Transition slide does not exist/);
    });

    it('should not transition to a negative numbered slide', function() {
        assert.throws(function() {
            let slider = Init(2);
            slider = TransitionTo(slider, -1);
        }, /Transition slide cannot be a negative number/);
    });

    it('should not transition to a 0 numbered slide', function() {
        assert.throws(function() {
            let slider = Init(2);
            slider = TransitionTo(slider, 0);
        }, /Transition slide cannot be zero/);
    });

    it('should be able to change transition slide mid transition', function() {
        let slider = Init(3);
        slider = TransitionTo(slider, 2);
        slider = TransitionTo(slider, 3);
        assert.equal(3, slider.transitionTo);
    });
});