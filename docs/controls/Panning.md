# Panning

Panning is applied with timeline/custom button

-   [Panning](#panning)
    -   [JSON Properties](#json-properties)
        -   [Root](#root)
            -   [Required](#required)
    -   [Constraints](#constraints)
    -   [Default Panning](#default-panning)

## JSON Properties

### Root

#### Required

| Property Name | Expected | Description                        |
| ------------- | -------- | ---------------------------------- |
| `enabled`     | boolean  | Set to true when panning is needed |

## Constraints

-   If panning is not provided then enabled will be false.

## Default Panning

-   By defalut enabled will be false to enable set it to true as below

```javascript
var pan = {
    enabled: true
};
```
