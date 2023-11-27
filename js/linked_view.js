const spec1_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "Data/linked_viz_1_1.json",
    },
    "width": 300, 
    "height": 450, 
    "title": "Number of Service Requests by Type",
    "mark": "bar",
    "transform": [{
      "filter": {
          "selection": "yearSlider"
      }
    }],
    "encoding": {
        "x": {"field": "count", "type": "quantitative", "title": "Number of Service Requests", "scale": {"type": "log"}},
        "y": {"field": "RequestType", "type": "ordinal", "title": "Request Type"},
        "color": {"field": "RequestType", "legend": null, "scale": {"scheme": "category20"}},
        "tooltip": [
            {"field": "RequestType", "type": "ordinal", "title": "Request Type"},
            {"field": "count", "type": "quantitative", "title": "Count"}
        ]
    },
    "selection": {
        "yearSlider": {
            "type": "single",
            "fields": ["CREATED_YEAR"],
            "bind": {
                "input": "range",
                "min": 2018,
                "max": 2023,
                "step": 1,
                "name": "Year Slider"
            }
        }
    }
  };
  
  const spec1_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "Data/linked_viz_1_2.json",
    },
    "width": 200,
    "height": 200,
    "mark": {"type": "arc", "innerRadius": 55, "tooltip": true},
    "title": "Proportion of department per year",
    "transform": [{
      "filter": {
        "selection": "yearSlider"
      }
    }],
    "encoding": {
        "theta": {"field": "count", "type": "quantitative"},
        "color": {"field": "OWNER_DEPARTMENT", "type": "nominal"}
    },
    "selection": {
        "yearSlider": {
            "type": "single",
            "fields": ["CREATED_YEAR"],
            "bind": {
                "input": "range",
                "min": 2018,
                "max": 2023,
                "step": 1,
                "name": "Year Slider"
            }
        }
    }
  };
  
  const spec1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 500,
    "height": 500,
    "hconcat": [spec1_1, spec1_2],
    "resolve": {
        "scale": {
            "y": "independent",
            "x": "shared",
            "color": "independent"
        }
    }
  };
  vegaEmbed("#vis1", spec1);
  
  const spec2_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
      "url": "Data/linked_viz_2_1.json",
    },
    "transform": [
        {
            "filter": {
                "selection": "yearSlider"
            }
        }
    ],
    "mark": "line",
    "encoding": {
        "x": {
            "field": "CREATED_MONTH",
            "type": "ordinal",
            "title": "Month"
        },
        "y": {
            "field": "count",
            "type": "quantitative",
            "title": "Count"
        },
        "color": {
            "field": "CREATED_YEAR",
            "type": "nominal",
            "title": "Year"
        }
    },
    "title": "Request Counts Trend by Year",
    "selection": {
        "yearSlider": {
            "type": "single",
            "fields": ["CREATED_YEAR"],
            "bind": {
                "input": "range",
                "min": {"expr": "min(datum.CREATED_YEAR)"},
                "max": {"expr": "max(datum.CREATED_YEAR)"},
                "step": 1,
                "name": "Year Slider"
            }
        }
    }
  }
  
  const spec2_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "Data/linked_viz_2_2.json",
    },
    "transform": [
        {
            "filter": {
                "selection": "yearSlider"
            }
        }
    ],
    "width": 200,
    "height": 200,
    "mark": {"type": "arc", "tooltip": true},
    "title": "Status Proportion Per Year",
    "encoding": {
        "theta": {"field": "count", "type": "quantitative"},
        "color": {"field": "STATUS", "type": "nominal"}
    },
    "selection": {
        "yearSlider": {
            "type": "single",
            "fields": ["CREATED_YEAR"],
            "bind": {
                "input": "range",
                "min": {"expr": "min(datum.CREATED_YEAR)"},
                "max": {"expr": "max(datum.CREATED_YEAR)"},
                "step": 1,
                "name": "Year Slider"
            }
        }
    }
  }
  
  const spec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 400,
    "height": 200,
    "hconcat": [spec2_1, spec2_2],
      "resolve": {
      "scale": {
          "color": "independent"
      }
    }
  };
  vegaEmbed("#vis2", spec2);
  
  const spec3_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "Data/linked_viz_3_1.json",
    },
    "width": 200,
    "height": 200,
    "mark": {"type": "arc", "innerRadius": 55, "tooltip": true},
    "transform": [
        {
            "filter": {
                "selection": "yearSlider"
            }
        }
    ],
    "title": "Average completion time per department",
    "encoding": {
        "theta": {"field": "COMPLETION_TIME", "type": "quantitative", "sort": "descending"},
        "color": {"field": "OWNER_DEPARTMENT", "type": "nominal", "title": "Department"}
    },
    "selection": {
        "yearSlider": {
            "type": "single",
            "fields": ["CREATED_YEAR"],
            "bind": {
                "input": "range",
                "min": 2018,
                "max": 2023,
                "step": 1,
                "name": "Year Slider"
            }
        }
    }
  };
  
  const spec3_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
      "url": "Data/linked_viz_3_2.json",
    },
    "transform": [
        {
            "filter": {
                "selection": "yearSlider"
            }
        }
    ],
    "mark": "line",
    "encoding": {
        "x": {
            "field": "CREATED_MONTH",
            "type": "ordinal",
            "title": "Month"
        },
        "y": {
            "field": "Count",
            "type": "quantitative",
            "title": "Count"
        },
        "color": {
            "field": "OWNER_DEPARTMENT",
            "type": "nominal",
            "title": "Department"
        }
    },
    "title": "Number of Requests by Department",
    "selection": {
        "yearSlider": {
            "type": "single",
            "fields": ["CREATED_YEAR"],
            "bind": {
                "input": "range",
                "min": {"expr": "min(datum.CREATED_YEAR)"},
                "max": {"expr": "max(datum.CREATED_YEAR)"},
                "step": 1,
                "name": "Year Slider"
            }
        }
    }
  };
  
  const spec3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 400,
    "height": 200,
    "hconcat": [spec3_1, spec3_2],
    "resolve": {
    "scale": {
          "color": "independent"
      }
    }
  };
  vegaEmbed("#vis3", spec3);
  
  const spec4_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "Data/linked_viz_4_1.json",
    },
    "mark": "bar",
    "width": 50,
    "height": 500,
    "transform": [
      {
        "filter": {
                  "selection": "Select"
              }
      }
    ],
    "encoding": {
      "y": {
            "field": "COUNT",
            "type": "quantitative",
            "stack": "zero",
            "title": "Count"
      },
      "color": {
        "field": "ORIGIN",
        "type": "nominal",
        "title": "Origin device"
      },
      "tooltip": [
        {"field": "OWNER_DEPARTMENT", "title": "Department"},
        {"field": "ORIGIN", "title": "Origin device"},
        {"field": "COUNT", "title": "Count"}
      ],
    },
    "selection": {
        "Select": {
            "type": "single",
            "fields": ["OWNER_DEPARTMENT"],
            "bind": {"input": "select",
                     "options": ["311 City Services", "Animal Care and Control", "Aviation", "BACP - Business Affairs and Consumer Protection", "CDOT - Department of Transportation", "City Clerk\'s Office", "DOB - Buildings", "DWM - Department of Water Management", "Department of Housing", "Department of Planning and Development", "Extreme Weather Notification", "Finance", "Fire", "Health", "Outside Agencies", "Streets and Sanitation"],
                     "title": "Department: "}
        }
    },
    "title": "Count and Types of Origin Devices Used to Contact Departments",
  };
  
  const spec4_2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "Data/linked_viz_4_2.json",
    },
    "width": 200,
    "height": 200,
    "mark": "bar",
    "transform": [
        {
            "filter": {
                "selection": "Select"
            }
        }
    ],
    "title": "Count and Types of Services per Department",
    "encoding": {
        "y": {"field": "count", "type": "quantitative", "title": "Count"},
        "x": {"field": "SR_TYPE", "type": "nominal", "title": "Service Types", "axis": {"labelAngle": 45}},
        "tooltip": [
          {"field": "SR_TYPE", "title": "Service Type"},
          {"field": "count", "title": "Count"}
        ],
    },
    "selection": {
      "Select": {
          "type": "single",
          "fields": ["OWNER_DEPARTMENT"],
          "bind": {"input": "select",
                   "options": ["311 City Services", "Animal Care and Control", "Aviation", "BACP - Business Affairs and Consumer Protection", "CDOT - Department of Transportation", "City Clerk\'s Office", "DOB - Buildings", "DWM - Department of Water Management", "Department of Housing", "Department of Planning and Development", "Extreme Weather Notification", "Finance", "Fire", "Health", "Outside Agencies", "Streets and Sanitation"],
                   "title": "Department: "}
      }
    }
  };
  
  const spec4 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 400,
    "height": 200,
    "hconcat": [spec4_1, spec4_2],
    "resolve": {
        "scale": {
            "x": "independent",
            "y": "independent",
            "color": "independent"
        }
    }
  };
  vegaEmbed("#vis4", spec4);