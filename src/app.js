import { GetCurrentSlide } from "./ActionHelper/GetCurrentSlide";
import { GetNextSlide } from "./ActionHelper/GetNextSlide";
import { GetPreviousSlide } from "./ActionHelper/GetPreviousSlide";
import { GetSliderPositionAsPercentage } from "./ActionHelper/GetSliderPositionAsPercentage";
import { CompleteTransition } from "./Actions/CompleteTransition";
import { Init } from "./Actions/Init";
import { StartAutoplay } from "./Actions/StartAutoplay";
import { StopAutoplay } from "./Actions/StopAutoplay";
import { TransitionTo } from "./Actions/TransitionTo";
import { TransitionToNextSlide } from "./Actions/TransitionToNextSlide";
import { TransitionToPreviousSlide } from "./Actions/TransitionToPreviousSlide";
import CompleteTransitionFailedException from "./Exceptions/CompleteTransitionFailedException";
import InitiationFailedException from "./Exceptions/InitiationFailedException";
import StartAutoplayFailedException from "./Exceptions/StartAutoplayFailedException";
import StopAutoplayFailedException from "./Exceptions/StopAutoplayFailedException";
import TransitionToFailedException from "./Exceptions/TransitionToFailedException";
import TransitionToNextSlideFailedException from "./Exceptions/TransitionToNextSlideFailedException";
import TransitionToPreviousSlideFailedException from "./Exceptions/TransitionToPreviousSlideFailedException";

module.exports = {
    // ActionHelpers
    GetCurrentSlide: GetCurrentSlide,
    GetNextSlide: GetNextSlide,
    GetPreviousSlide: GetPreviousSlide,
    GetSliderPositionAsPercentage: GetSliderPositionAsPercentage,

    // Actions
    CompleteTransition: CompleteTransition,
    Init: Init,
    StartAutoplay: StartAutoplay,
    StopAutoplay: StopAutoplay,
    TransitionTo: TransitionTo,
    TransitionToNextSlide: TransitionToNextSlide,
    TransitionToPreviousSlide: TransitionToPreviousSlide,

    // Exceptions
    CompleteTransitionFailedException: CompleteTransitionFailedException,
    InitiationFailedException: InitiationFailedException,
    StartAutoplayFailedException: StartAutoplayFailedException,
    StopAutoplayFailedException: StopAutoplayFailedException,
    TransitionToFailedException: TransitionToFailedException,
    TransitionToNextSlideFailedException: TransitionToNextSlideFailedException,
    TransitionToPreviousSlideFailedException: TransitionToPreviousSlideFailedException
}