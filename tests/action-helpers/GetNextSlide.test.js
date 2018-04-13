import { Init } from '../../src/Actions/Init';
import { TransitionTo } from '../../src/Actions/TransitionTo';
import { GetNextSlide } from '../../src/ActionHelper/GetNextSlide';

var chai = require('chai');
var assert = chai.assert;

describe('GetNextSlide', function() {
    it('should fail if slide is not provided', function() {
        assert.throws(function() {
            let slider = Init(2);
            GetNextSlide();
        }, /Getting next slide requires state/);
    });

    it('should get next incremental slide if not on last slide', function() {
        let slider = Init(2);
        slider = TransitionTo(slider, GetNextSlide(slider));
        assert.equal(2, slider.transitionTo);
    });

    it('should get first slide if on last slide', function() {
        let slider = Init(2);
        slider = TransitionTo(slider, 2);
        slider = TransitionTo(slider, GetNextSlide(slider));
        assert.equal(1, slider.transitionTo);
    });
});