import Exception from './Exception.js';

export default class TransitionToPreviousSlideFailedException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'TransitionToPreviousSlideFailedException';
    }
}
