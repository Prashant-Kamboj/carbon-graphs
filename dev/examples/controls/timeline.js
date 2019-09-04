import Carbon from "../../../src/main/js/carbon";
import { getDemoData } from "../data";
import d3 from "d3";
import utils from "../../../src/main/js/helpers/utils";

export const renderTimeline = (id) => {
    const timelineDefault = Carbon.api.timeline(
        getDemoData(`#${id}`, "TIMELINE")
    );
    timelineDefault.loadContent(getDemoData(`#${id}`, "TIMELINE").data[0]);
    timelineDefault.loadContent(getDemoData(`#${id}`, "TIMELINE").data[1]);
    return timelineDefault;
};
export const renderTimelinePanning = (id) => {
    //dummy function to move the graph left
    const axisData = utils.deepClone(getDemoData(`#${id}`, "TIMELINE"));
    axisData.pan = {
        enabled: true
    };
    axisData.axis.x.lowerLimit = new Date(2016, 0, 1, 0).toISOString();
    axisData.axis.x.upperLimit = new Date(2016, 0, 2, 0).toISOString();

    const createGraph = () => {
        const graph = Carbon.api.timeline(axisData);
        graph.loadContent(getDemoData(`#${id}`, "TIMELINE").data[0]);
    };

    let initialHour = 0;

    const moveLeft = () => {
        d3.select(".carbon-graph-container").remove();
        const hour = initialHour + 3;
        initialHour = hour;
        axisData.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
        axisData.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();
        createGraph();
    };
    //dummy function to move the graph right
    const moveRight = () => {
        d3.select(".carbon-graph-container").remove();
        const hour = initialHour - 3;
        initialHour = hour;
        axisData.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
        axisData.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();
        createGraph();
    };

    //creats left arrow
    d3.selectAll("#carbon_id_mctbW9kZQ")
        .append("button")
        .classed("chevronLeft", true)
        .on("click", moveLeft)
        .append("svg")
        .attr("height", 25)
        .attr("width", 20)
        .append("g")
        .attr("transform", `translate(1,4)scale(0.4,0.4)`)
        .append("path")
        .attr("d", "M10.3,24,33.8,0l3.9,3.8L18,24,37.7,44.2,33.8,48Z");

    //creats right arrow
    d3.selectAll("#carbon_id_mctbW9kZQ")
        .append("button")
        .classed("chevronRight", true)
        .on("click", moveRight)
        .append("svg")
        .attr("height", 25)
        .attr("width", 20)
        .append("g")
        .attr("transform", `translate(0,4)scale(0.4,0.4)`)
        .append("path")
        .attr("d", "M37.7,24,14.2,48l-3.9-3.8L30,24,10.3,3.8,14.2,0Z");

    return createGraph();
};
