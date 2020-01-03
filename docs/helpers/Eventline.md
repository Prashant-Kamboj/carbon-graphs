# Eventline

Eventline is a doted line which can be used to show so some event occuring at a specific time.

Eventline is different from dateline as it has a style property to change the style of the line to make it a doted line.

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

| Property Name | Expected | Default                    | Description                                       |
| ------------- | -------- | -------------------------- | ------------------------------------------------- |
| style         | object   | `{strokeDashArray: "2,2"}` | Any strokeDashArray value to add dash to the line |

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
