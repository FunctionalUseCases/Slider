var chai = require('chai');
var assert = chai.assert;


import * as actions from '../../src/Actions';
import GetPreviousSlide from '../../src/ActionHelper/GetPreviousSlide';

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