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
        .domain([0, dataTarget.values.length - 1])
        .range([lowerShade, upperShade]);

    const disarr = new Set(radiusData);
    const newarr = [...disarr];
    const sortedArray = newarr.sort((a, b) => a - b);

    const colorMap = new Map();
    sortedArray.forEach((ele, index) => {
        colorMap.set(ele, huePaletteList(index));
    });
    return colorMap;
};
