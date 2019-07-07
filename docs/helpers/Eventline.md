# Eventline

If Eventline is provided then the `value` property is mandatory.

When using Eventline with graph then `x axis type` must be **timeseries** it is mandatory.

-   [Eventline](#eventline)
    -   [JSON Properties](#json-properties)
        -   [Required](#required)
        -   [Optional](#optional)
    -   [Structure](#structure)

## JSON Properties

### Required

| Property Name | Expected         | Description                                 |
| ------------- | ---------------- | ------------------------------------------- |
| value         | string (ISO8601) | Position where eventline needs to be placed |
| color         | string (ISO8601) | color of the eventline                      |

### Optional

| Property Name | Expected | Default   | Description                                       |
| ------------- | -------- | --------- | ------------------------------------------------- |
| style         | object   | undefined | Any strokeDashArray value to add dash to the line |

## Structure

```javascript
"eventline": [
        {
            color: Carbon.helpers.COLORS.GREEN,
            style: {
                strokeDashArray: "4,4"
            },
            value: new Date(2016, 5, 1).toISOString()
        }
    ]
```
