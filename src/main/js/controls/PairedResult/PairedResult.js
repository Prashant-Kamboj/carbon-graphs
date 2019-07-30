"use strict";
import { GraphContent } from "../../core";
import { getDefaultValue } from "../../core/BaseConfig";
import constants from "../../helpers/constants";
import {
    prepareLabelShapeItem,
    removeLabelShapeItem
} from "../../helpers/label";
import { removeLegendItem } from "../../helpers/legend";
import {
    hideAllRegions,
    removeRegion,
    translateRegion,
    checkRegionSame
} from "../../helpers/region";
import styles from "../../helpers/styles";
import utils from "../../helpers/utils";
import {
    clear,
    clickHandler,
    draw,
    getValue,
    hoverHandler,
    iterateOnPairType,
    prepareLegendItems,
    processDataPoints,
    renderRegion,
    translatePairedResultGraph
} from "./helpers/helpers";
import PairedResultConfig from "./PairedResultConfig";

/**
 * @typedef {Object} PairedResult
 * @typedef {Object} GraphContent
 * @typedef {Object} PairedResultConfig
 */
/**
 * Calculates the min and max values for Y Axis or Y2 Axis
 * @private
 * @param {Array} values - Datapoint values
 * @param {string} axis - y or y2
 * @returns {Object} - Contains min and max values for the data points
 */
const calculateValuesRange = (values, axis = constants.Y_AXIS) => ({
    [axis]: {
        min: Math.min(
            ...values.map((i) => Math.min(...Object.keys(i).map((j) => i[j].y)))
        ),
        max: Math.max(
            ...values.map((i) => Math.max(...Object.keys(i).map((j) => i[j].y)))
        )
    }
});

/**
 * Data point sets can be loaded using this function.
 * Load function validates, clones and stores the input onto a config object.
 * @private
 * @param {Object} inputJSON - Input JSON provided by the consumer
 * @returns {Object} PairedResultConfig config object containing consumer data
 */
const loadInput = (inputJSON) =>
    new PairedResultConfig()
        .setInput(inputJSON)
        .validateInput()
        .clone()
        .getConfig();

/**
 * A Paired result graph is a graph that is represented by 2 points
 * and a line connecting them. There may be an optional 3rd datapoint
 * representing a median between them.
 *
 * @example
 * You can have 3 pairs of x and y co-ordinates with different x and y values to make option 3 below.
 * Or
 * You can have 3 identical X co-ordinates with varying Y co-ordinates to have option 1, shown below.
 *   o
 *   |
 *   |
 *   |
 *   |
 *   o
 *
 *  // Or
 *
 * o------------o
 *
 * // Or
 * o
 *  \
 *   \
 *    \
 *     \
 *      o
 *
 * // etc.
 * Lifecycle functions include:
 *  * Load
 *  * Generate
 *  * Unload
 *  * Destroy
 * @module PairedResult
 * @class PairedResult
 */
class PairedResult extends GraphContent {
    /**
     * @constructor
     * @param {PairedResultConfig} input - Input JSON instance created using GraphConfig
     */
    constructor(input) {
        super();
        this.config = loadInput(input);
        this.config.yAxis = getDefaultValue(
            this.config.yAxis,
            constants.Y_AXIS
        );
        this.valuesRange = calculateValuesRange(
            this.config.values,
            this.config.yAxis
        );
        this.dataTarget = {};
    }

    /**
     * @inheritDoc
     */
    load(graph) {
        this.dataTarget = processDataPoints(graph.config, this.config);
        draw(graph.scale, graph.config, graph.svg, this.dataTarget);
        if (utils.notEmpty(this.dataTarget.regions)) {
            renderRegion(graph.scale, graph.config, graph.svg, this.dataTarget);
        }
        prepareLegendItems(
            graph.config,
            {
                clickHandler: clickHandler(
                    graph,
                    this,
                    graph.config,
                    graph.svg
                ),
                hoverHandler: hoverHandler(graph.config, graph.svg)
            },
            this.dataTarget,
            graph.legendSVG
        );
        if (graph.axesLabelShapeGroup[this.config.yAxis]) {
            iterateOnPairType((type) => {
                prepareLabelShapeItem(
                    graph.config,
                    {
                        key: `${this.dataTarget.key}_${type}`,
                        label: getValue(this.dataTarget.label, type),
                        color: getValue(this.dataTarget.color, type),
                        shape: getValue(this.dataTarget.shape, type)
                    },
                    graph.axesLabelShapeGroup[this.config.yAxis]
                );
            });
        }
        return this;
    }

    /**
     * @inheritDoc
     */
    unload(graph) {
        clear(graph.svg, this.dataTarget);
        removeRegion(
            graph.svg.select(`.${styles.regionGroup}`),
            this.dataTarget
        );
        iterateOnPairType((type) => {
            const key = `${this.dataTarget.key}_${type}`;
            removeLegendItem(graph.legendSVG, {
                key
            });
            removeLabelShapeItem(graph.axesLabelShapeGroup[this.config.yAxis], {
                key
            });
        });
        this.dataTarget = {};
        this.config = {};
        return this;
    }

    /**
     * @inheritDoc
     */
    resize(graph) {
        let isPairedDataProper = true;
        if (utils.notEmpty(this.dataTarget.regions)) {
            const regionList = this.dataTarget.regions;
            const values = this.dataTarget.values;

            //check if all region are there with respect to value
            if (graph.content.length > 1) {
                for (let i = 0; i < values.length; i++) {
                    // eslint-disable-next-line max-depth
                    for (const key in values[i]) {
                        // eslint-disable-next-line max-depth
                        if (!regionList.hasOwnProperty(key)) {
                            isPairedDataProper = false;
                            break;
                        }
                    }
                    // eslint-disable-next-line max-depth
                    if (isPairedDataProper === false) {
                        break;
                    }
                }
                if (
                    isPairedDataProper === true &&
                    graph.config.isHideAllRegion === false
                ) {
                    checkRegionSame(graph.svg);
                    graph.config.isHideAllRegion = false;
                } else {
                    hideAllRegions(graph.svg);
                    graph.config.isHideAllRegion = true;
                }
            }

            translateRegion(
                graph.scale,
                graph.config,
                graph.svg.select(
                    `g[aria-describedby="region_${this.dataTarget.key}"]`
                )
            );
        } else {
            hideAllRegions(graph.svg);
            graph.config.isHideAllRegion = true;
        }

        translatePairedResultGraph(graph.scale, graph.config, graph.svg);
        return this;
    }

    /**
     * @inheritDoc
     */
    redraw(graph) {
        clear(graph.svg, this.dataTarget);
        draw(graph.scale, graph.config, graph.svg, this.dataTarget);
        return this;
    }
}

export default PairedResult;
