import copy from '../Helpers/Copy.js';
import StartAutoplayFailedException from '../Exceptions/StartAutoplayFailedException.js';
import {State} from '../State';

export const StartAutoplay = function(slider) {

    if (slider === undefined) {
        throw new StartAutoplayFailedException('Slider state is required');
    }
    let state = copy(slider);
    state.autoplay = true;
    return State(state);
}
