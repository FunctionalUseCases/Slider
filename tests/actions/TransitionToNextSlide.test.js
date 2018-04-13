var chai = require('chai');
var assert = chai.assert;

import * as actions from '../../src/Actions';

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