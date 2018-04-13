import copy from '../Helpers/Copy.js';
import StopAutoplayFailedException from '../Exceptions/StopAutoplayFailedException.js';
import {State} from '../State';

export const StopAutoplay = function(slider) {

    if (slider === undefined) {
        throw new StopAutoplayFailedException('Slider state is required');
    }
    let state = copy(slider);
    state.autoplay = false;
    return State(state);
}
