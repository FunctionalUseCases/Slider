var chai = require('chai');
var assert = chai.assert;

import Init from '../../src/Actions/Init.js';
import StopAutoplay from '../../src/Actions/StopAutoplay.js';

describe('StopAutoplay', function() {
    
    it('should set autoplay to false', function() {
        let slider = Init(5);
            slider = StopAutoplay(slider);
        assert.equal(false, slider.autoplay);
    });

    it('should throw an error if no slide is provided', function() {
        assert.throws(function() {
            let slider = Init(5);
                slider = StopAutoplay();
        }, /Slider state is required/);
    });
});
