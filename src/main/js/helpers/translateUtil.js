import constants from "./constants";

/**
 * Makes translation zero if panning is enabled
 *
 * @private
 * @param {object} config - config object derived from input JSON
 * @returns {undefined} transcall - holds the value of transition.
 */
const translatePan = (config) => {
    let transcall;
    if (config.pan === undefined) {
        transcall = constants.d3Transition;
    } else if (config.pan !== undefined && config.pan.enabled === true) {
        transcall = constants.d3TransitionPan;
    }
    return transcall;
};

export { translatePan };
