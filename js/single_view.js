function changePage(page) {
  fetch(page + '.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('content').innerHTML = data;
      })
      .catch(error => console.error('Error loading page:', error));
}


const spec1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "url": "Data/single_viz_1.json",
    },
    "mark": "line",
    "width": 200,
    "height": 200,
    "title": "Requests per year",
    "encoding": {
        "y": {
            "type": "quantitative",
            "field": "count",
            "scale": {"type": "linear"}
        },
        "x": {"type": "Nominal", "field": "CREATED_YEAR"}
    }
};
vegaEmbed("#vis1", spec1);

const spec2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "Data/single_viz_2.json",
  },
  "width": 200,
  "height": 200,
  "mark": {"type": "arc", "tooltip": true},
  "title": "Requests per department",
  "encoding": {
      "theta": {"field": "count", "type": "quantitative"},
      "color": {"field": "Department", "type": "nominal"}
  }
};
vegaEmbed("#vis2", spec2);

const spec3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "Data/single_viz_3.json",
  },
  "width": 200,
  "height": 200,
  "mark": "bar",
  "title": "Requests per Department",
  "encoding": {
      "y": {"field": "count", "type": "quantitative"},
      "x": {"field": "Department", "type": "nominal"}
  }
};
vegaEmbed("#vis3", spec3);

const spec4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "Data/single_viz_4.json",
  },
  "width": 200,
  "height": 200,
  "mark": {"type":"area", "interpolate":"natural"},
  "title": "Area chart requests per Year",
  "encoding": {
      "x": {"type": "Nominal", "field": "CREATED_YEAR"},
      "y": {"type": "quantitative", "field": "count", "scale": {"type": "linear"}},
  }
};
vegaEmbed("#vis4", spec4);

const spec5 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "Data/single_viz_5.json",
  },
  "width": 200,
  "height": 200,
  "mark": {"type": "arc", "innerRadius": 55, "tooltip": true},
  "title": "Average completion time per department",
  "encoding": {
      "theta": {"field": "COMPLETION_TIME", "type": "quantitative", "sort": "descending"},
      "color": {"field": "OWNER_DEPARTMENT", "type": "nominal"}
  },
};
vegaEmbed("#vis5", spec5);

const spec6 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "Data/single_viz_6.json",
  },
  "width": 200,
  "height": 200,
  "mark": "bar",
  "title": "Distribution of departments across the most requested zip codes",
  "encoding": {
      "x": {
          "field": "ORIGIN",
          "type": "ordinal",
      },
      "y": {
          "field": "count",
          "type": "quantitative",
          "scale": {"type": "linear"}
      },
      "color": {
          "field": "ZIP_CODE",
          "type": "nominal",
          "scale": {
              "domain": ["60612", "60617", "60618", "60628", "60666"],
          }
      }
  }
};
vegaEmbed("#vis6", spec6);
