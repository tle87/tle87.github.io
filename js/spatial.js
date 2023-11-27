const spec1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 500,
    "height": 500,
    "data": {
        "url": "Data/spatial_viz.json",
        "format": {"property": "features"}
    },
    "layer": [
        {
            "selection": {
                "highlight": {"type": "single", "empty": "none", "on": "mousemove", "resolve": "global"},
            },
            "mark": {
                "type": "geoshape",
                "stroke": "black",
                "strokeWidth": 0.5,
            },
            "encoding": {
                "color": {
                    "field": "properties.SR_TYPE", "type": "nominal", "scale": {"scheme": "category10"},
                    "legend": {"title": "Service Request Types"},
                    "condition": {"selection": "highlight", "value": "white"}
                },
                "opacity": {
                    "condition": {"test": "test(regexp(search_input,'i'), datum.id)",
                    "value": 1
                  },
                  "value": 0.1
                },
                "tooltip": [
                    {"field": "id", "type": "nominal", "title": "Zip Code"},
                    {"field": "properties.SR_TYPE", "type": "nominal", "title": "Most Requested Service"}
                ]
            },
        },
        {
          "mark": "text",
          "encoding": {
            "text": {
                "condition": {
                    "test": "datum.properties.area > 1000",
                    "field": "id",
                },
                "field": "",
                "type": "nominal"
            },
            "longitude": {"field": "properties.centroid[0]", "type": "quantitative"},
            "latitude": {"field": "properties.centroid[1]", "type": "quantitative"},
            "color": {"value": "black"},
            "size": {"value": 8}
          }
        }
    ],
    "params": [
        {
          "name": "search_input",
          "bind": {
            "input": "search",
            "placeholder": "Enter Zip Code",
            "name": "Search "
          },
          "value": ""
        }
    ],
    "title": "Most Requested Service Per Zip Code",
  };
  vegaEmbed("#vis1", spec1);
  