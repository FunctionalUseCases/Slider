var chai = require('chai');
var assert = chai.assert;

import {Init} from '../../src/Actions/Init';
import {TransitionToNextSlide} from '../../src/Actions/TransitionToNextSlide';

describe('TransitionToNextSlide', function() {
    it('should go to next incremental slide 1 -> 2', function() {
        let slider = Init(2);
        slider = TransitionToNextSlide(slider);
        assert.equal(2, slider.transitionTo);
    });
    it('should go to next incremental slide 1 -> 2 -> 3', function() {
        let slider = Init(3);
        slider = TransitionToNextSlide(slider);
        slider = TransitionToNextSlide(slider);
        assert.equal(3, slider.transitionTo);
    });
});