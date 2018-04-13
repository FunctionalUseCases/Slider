var chai = require('chai');
var assert = chai.assert;

import * as actions from '../src/Actions';
import GetNextSlide from '../src/ActionHelper/GetNextSlide.js';
import GetPreviousSlide from '../src/ActionHelper/GetPreviousSlide.js';
import GetCurrentSlide from '../src/ActionHelper/GetCurrentSlide.js';

describe('Slide Instance:', function() {

    
    describe('GetPreviousSlide', function() {
        it('should fail if slide is not provided', function() {
            assert.throws(function() {
                let slider = actions.Init(2);
                GetPreviousSlide();
            }, /Getting previous slide requires state/);
        });

        it('should get next decremental slide if not on first slide', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, 2);
            slider = actions.TransitionTo(slider, GetPreviousSlide(slider));
            assert.equal(1, slider.transitionTo);
        });

        it('should get last slide if on first slide', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionTo(slider, GetPreviousSlide(slider));
            assert.equal(2, slider.transitionTo);
        });
    });

    describe('TransitionToNextSlide', function() {
        it('should go to next incremental slide 1 -> 2', function() {
            let slider = actions.Init(2);
            slider = actions.TransitionToNextSlide(slider);
            assert.equal(2, slider.transitionTo);
        });
        it('should go to next incremental slide 1 -> 2 -> 3', function() {
            let slider = actions.Init(3);
            slider = actions.TransitionToNextSlide(slider);
            slider = actions.TransitionToNextSlide(slider);
            assert.equal(3, slider.transitionTo);
        });
    });

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

});
