import Carbon from "../../../src/main/js/carbon";
import utils from "../../../src/main/js/helpers/utils";
import { getDemoData } from "../data";
import d3 from "d3";

const tickValues = [
    new Date(2016, 0, 1, 1, 0).toISOString(),
    new Date(2016, 0, 1, 5, 0).toISOString(),
    new Date(2016, 0, 1, 10, 0).toISOString(),
    new Date(2016, 0, 1, 15, 0).toISOString(),
    new Date(2016, 0, 1, 20, 0).toISOString()
];
const regions = [
    {
        axis: "y",
        start: 2,
        end: 10,
        color: "#f4f4f4"
    },
    {
        axis: "y",
        start: 12,
        end: 18,
        color: "#c8cacb"
    }
];
export const renderLine = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    return lineDefault;
};
export const renderLineY2Axis = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_TIMESERIES"));
    axisData.axis.y2.show = true;
    const lineTime = Carbon.api.graph(axisData);
    lineTime.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[0])
    );
    lineTime.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[1])
    );
    return lineTime;
};
export const renderLineXHidden = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT"));
    axisData.axis.x.show = false;
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    return lineDefault;
};
export const renderLineYHidden = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT"));
    axisData.axis.y.show = false;
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    return lineDefault;
};
export const renderLineWithDateline = (id) => {
    const lineTime = Carbon.api.graph(
        getDemoData(`#${id}`, "LINE_TIMESERIES_DATELINE")
    );
    lineTime.loadContent(
        Carbon.api.line(
            getDemoData(`#${id}`, "LINE_TIMESERIES_DATELINE").data[0]
        )
    );
    return lineTime;
};
export const renderLineXStaticTicks = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_TIMESERIES"));
    axisData.axis.x.ticks = {
        values: tickValues,
        format: "%H:%M:%S"
    };
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[0])
    );
    return lineDefault;
};
export const renderLineXAxisFormatted = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_TIMESERIES"));
    axisData.axis.x.ticks = {
        values: tickValues,
        format: "%a %b %e %X %Y"
    };
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[0])
    );
    return lineDefault;
};
export const renderLineXAlternateLocale = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_TIMESERIES"));
    axisData.locale = Carbon.helpers.LOCALE.de_DE;
    axisData.axis.x.ticks = {
        values: tickValues,
        format: "%A %e %B %Y, %X"
    };
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[0])
    );
    return lineDefault;
};
export const renderLineLabelHidden = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT"));
    axisData.showLabel = false;
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    return lineDefault;
};
export const renderLineLegendHidden = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT"));
    axisData.showLegend = false;
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    return lineDefault;
};
export const renderLineLegendItemDisabled = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    const data = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT").data[0]);
    data.label.isDisabled = true;
    lineDefault.loadContent(Carbon.api.line(data));
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[4])
    );
    return lineDefault;
};
export const renderLineGridHHidden = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT"));
    axisData.showHGrid = false;
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    return lineDefault;
};
export const renderLineGridVHidden = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT"));
    axisData.showVGrid = false;
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    return lineDefault;
};
export const renderLineShapesHidden = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT"));
    axisData.showShapes = false;
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    return lineDefault;
};
export const renderMultiLine = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    setTimeout(
        () =>
            lineDefault.graphContainer
                ? lineDefault.loadContent(
                      Carbon.api.line(
                          getDemoData(`#${id}`, "LINE_DEFAULT").data[1]
                      )
                  )
                : "",
        750
    );
    setTimeout(
        () =>
            lineDefault.graphContainer
                ? lineDefault.loadContent(
                      Carbon.api.line(
                          getDemoData(`#${id}`, "LINE_DEFAULT").data[2]
                      )
                  )
                : "",
        750 * 2
    );
    setTimeout(
        () =>
            lineDefault.graphContainer
                ? lineDefault.loadContent(
                      Carbon.api.line(
                          getDemoData(`#${id}`, "LINE_DEFAULT").data[3]
                      )
                  )
                : "",
        750 * 3
    );
    setTimeout(
        () =>
            lineDefault.graphContainer
                ? lineDefault.loadContent(
                      Carbon.api.line(
                          getDemoData(`#${id}`, "LINE_DEFAULT").data[4]
                      )
                  )
                : "",
        750 * 4
    );
    setTimeout(
        () =>
            lineDefault.graphContainer
                ? lineDefault.loadContent(
                      Carbon.api.line(
                          getDemoData(`#${id}`, "LINE_DEFAULT").data[5]
                      )
                  )
                : "",
        750 * 5
    );
    setTimeout(
        () =>
            lineDefault.graphContainer
                ? lineDefault.loadContent(
                      Carbon.api.line(
                          getDemoData(`#${id}`, "LINE_DEFAULT").data[6]
                      )
                  )
                : "",
        750 * 6
    );
    return lineDefault;
};
export const renderLineTimeSeries = (id) => {
    const lineTime = Carbon.api.graph(getDemoData(`#${id}`, "LINE_TIMESERIES"));
    lineTime.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[0])
    );
    return lineTime;
};
export const renderLineRegionSimple = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    const data = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT").data[0]);
    data.regions = [regions[0]];
    lineDefault.loadContent(Carbon.api.line(data));
    return lineDefault;
};
export const renderLineRegionMultiple = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    const data = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT").data[4]);
    data.regions = regions;
    lineDefault.loadContent(Carbon.api.line(data));
    return lineDefault;
};
export const renderLineRegionNoLower = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    const data = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT").data[0]);
    data.regions = [
        {
            end: 10
        }
    ];
    lineDefault.loadContent(Carbon.api.line(data));
    return lineDefault;
};
export const renderLineRegionNoUpper = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    const data = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT").data[0]);
    data.regions = [
        {
            start: 2
        }
    ];
    lineDefault.loadContent(Carbon.api.line(data));
    return lineDefault;
};
export const renderLineRegionY2 = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_TIMESERIES"));
    const dataValueObject = utils.deepClone(
        getDemoData(`#${id}`, "LINE_TIMESERIES").data[1]
    );
    axisData.axis.y2.show = true;
    dataValueObject.regions = [
        {
            axis: "y2",
            start: 50,
            end: 150
        }
    ];
    const lineTime = Carbon.api.graph(axisData);
    lineTime.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[0])
    );
    lineTime.loadContent(Carbon.api.line(dataValueObject));
    return lineTime;
};
export const renderMultiLineRegion = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    const data = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT").data[0]);
    const dataAlt = utils.deepClone(
        getDemoData(`#${id}`, "LINE_DEFAULT").data[2]
    );
    data.regions = [
        {
            start: 2
        }
    ];
    dataAlt.regions = [
        {
            start: 2,
            end: 14
        }
    ];
    lineDefault.loadContent(Carbon.api.line(data));
    lineDefault.loadContent(Carbon.api.line(dataAlt));
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[4])
    );
    return lineDefault;
};
export const renderMultiLineIdenticalDatasetRegion = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    const data = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT").data[0]);
    const dataAlt = utils.deepClone(
        getDemoData(`#${id}`, "LINE_DEFAULT").data[2]
    );
    data.regions = [
        {
            start: 2,
            end: 14
        }
    ];
    dataAlt.regions = [
        {
            start: 2,
            end: 14
        }
    ];
    lineDefault.loadContent(Carbon.api.line(data));
    lineDefault.loadContent(Carbon.api.line(dataAlt));
    return lineDefault;
};
export const renderGoalLine = (id) => {
    const lineDefault = Carbon.api.graph(getDemoData(`#${id}`, "LINE_DEFAULT"));
    const data = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT").data[5]);
    data.regions = [
        {
            start: 15,
            end: 15,
            color: "#bcbfc0"
        }
    ];
    lineDefault.loadContent(Carbon.api.line(data));
    return lineDefault;
};
export const renderLineBlankDataPoint = (id) => {
    const data = utils.deepClone(
        getDemoData(`#${id}`, "LINE_TIMESERIES").data[2]
    );
    const lineTime = Carbon.api.graph(getDemoData(`#${id}`, "LINE_TIMESERIES"));
    lineTime.loadContent(Carbon.api.line(data));
    return lineTime;
};
export const renderLineLegendTo = (id) => {
    // Add legend container ID to input JSON
    const data = utils.deepClone(
        getDemoData(`#graphContainer`, "LINE_TIMESERIES")
    );
    data.bindLegendTo = "#legendContainer";
    const lineTime = Carbon.api.graph(data);
    lineTime.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[0])
    );
    lineTime.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[2])
    );
    return lineTime;
};
export const renderLineDateTimeBuckets = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_TIMESERIES"));
    axisData.axis.x.lowerLimit = new Date(2016, 0, 0, 23, 59).toISOString();
    axisData.axis.x.upperLimit = new Date(2016, 0, 2, 1, 0).toISOString();
    axisData.axis.x.ticks = {
        values: tickValues,
        format: "%H",
        lowerStepTickValues: [
            new Date(2016, 0, 1, 6).toISOString(),
            new Date(2016, 0, 1, 12).toISOString(),
            new Date(2016, 0, 1, 18).toISOString()
        ],
        midpointTickValues: [
            new Date(2016, 0, 1, 3).toISOString(),
            new Date(2016, 0, 1, 9).toISOString(),
            new Date(2016, 0, 1, 15).toISOString(),
            new Date(2016, 0, 1, 21).toISOString()
        ],
        upperStepTickValues: [
            new Date(2016, 0, 1, 0).toISOString(),
            new Date(2016, 0, 1, 24).toISOString()
        ]
    };
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_TIMESERIES").data[0])
    );
    return lineDefault;
};
export const renderLineXOrientationTop = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "LINE_DEFAULT"));
    axisData.axis.x.orientation = Carbon.helpers.AXES_ORIENTATION.X.TOP;
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "LINE_DEFAULT").data[0])
    );
    return lineDefault;
};
export const renderNoDataView = (id) => {
    const axisData = utils.deepClone(getDemoData(`#${id}`, "NO_DATA_VIEW"));
    const lineDefault = Carbon.api.graph(axisData);
    lineDefault.loadContent(
        Carbon.api.line(getDemoData(`#${id}`, "NO_DATA_VIEW").data[0])
    );
    return lineDefault;
};
export const renderLineWithPanning = (id) => {
    const axisData = utils.deepClone(
        getDemoData(`#${id}`, "LINE_TIMESERIES_DATELINE")
    );
    axisData.pan = {
        enabled: true
    };
    let initialHour = 0;
    const createGraph = () => {
        const graph = Carbon.api.graph(axisData);
        const lineData = utils.deepClone(
            getDemoData(`#${id}`, "LINE_TIMESERIES_DATELINE").data[0]
        );
        lineData.regions = [regions[0]];
        graph.loadContent(Carbon.api.line(lineData));
    };
    //dummy function to move the graph left
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
    d3.selectAll("#carbon_id_y1tb2Rl")
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
    d3.selectAll("#carbon_id_y1tb2Rl")
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
