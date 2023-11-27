const spec1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Chicago 311 Service-Request",
    "data": {
      "url": "Data/requests_data.json"
    },
    "vconcat": [
      {
        "mark": "line",
        "encoding": {
          "x": {
            "field": "CREATED_MONTH",
            "type": "ordinal",
            "title": "Month"
          },
          "y": {
            "aggregate": "sum",
            "field": "count",
            "type": "quantitative",
            "title": "Total Service Requests"
          }
        },
        "width": 900,
        "height": 200,
        "params": [{
          "name": "brush",
          "select": {"type": "interval", "encodings": ["x"]}
        }]
      },
      {
        "mark": "bar",
        "encoding": {
          "x": {
            "aggregate": "sum",
            "field": "count",
            "type": "quantitative",
            "title": "Total Service Requests"
          },
          "y": {
            "field": "SR_TYPE",
            "type": "ordinal",
            "title": "Service Request Type"
          },
          "color": {
            "field": "SR_TYPE",
            "type": "nominal",
            "scale": {"scheme": "category20c"},
            "legend": null
          }
        },
        "width": 900,
        "height": 2500,
        "transform": [
          {
            "filter": {
              "param": "brush",
              "field": "CREATED_MONTH",
              "timeUnit": "monthdate"
            }
          }
        ]
      }
    ]
  };
  
  vegaEmbed("#vis1", spec1);