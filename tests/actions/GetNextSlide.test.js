var chai = require('chai');
var assert = chai.assert;

import * as actions from '../../src/Actions';
import GetNextSlide from '../../src/ActionHelper/GetNextSlide';

describe('GetNextSlide', function() {
    it('should fail if slide is not provided', function() {
        assert.throws(function() {
            let slider = actions.Init(2);
            GetNextSlide();
        }, /Getting next slide requires state/);
    });

    it('should get next incremental slide if not on last slide', function() {
        let slider = actions.Init(2);
        slider = actions.TransitionTo(slider, GetNextSlide(slider));
        assert.equal(2, slider.transitionTo);
    });

    it('should get first slide if on last slide', function() {
        let slider = actions.Init(2);
        slider = actions.TransitionTo(slider, 2);
        slider = actions.TransitionTo(slider, GetNextSlide(slider));
        assert.equal(1, slider.transitionTo);
    });
});