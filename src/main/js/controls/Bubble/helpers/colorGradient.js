"use strict";
import d3 from "d3";
import constants from "../../../helpers/constants";

export const generateColor = (lowerShade, upperShade, dataTarget, useYAxis) => {
    const radiusData = [];
    if (useYAxis) {
        dataTarget.values.forEach((element) => {
            radiusData.push(element.y);
        });
    } else {
        const bubbleScale = d3.scale
            .linear()
            .domain([dataTarget.weight.min, dataTarget.weight.max])
            .range([
                constants.DEFAULT_BUBBLE_RADIUS_MIN,
                constants.DEFAULT_BUBBLE_RADIUS_MAX
            ]);

        dataTarget.values.forEach((element) => {
            radiusData.push(bubbleScale(element.weight));
        });
    }
    const huePaletteList = d3.scale
        .linear()
        .domain(d3.extent(radiusData))
        .range([lowerShade, upperShade]);

    return huePaletteList;
};
