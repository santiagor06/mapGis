import { Component, Input, ViewChild } from "@angular/core";
import { loadFeatureLayer } from "../../../functions/load-data.service";
import { ScatterPlotModel } from "@arcgis/charts-model";
import { ComponentLibraryModule } from "@arcgis/charts-components-angular";
import { ComponentLibraryModule as ComponentMap } from "@arcgis/map-components-angular";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

@Component({
  selector: "app-map",
  standalone: true,
  imports: [ComponentLibraryModule, ComponentMap],
  templateUrl: "./map.component.html",
  styleUrl: "./map.component.css",
})
export class MapComponent {
  @Input() mapId: string = "";
  @Input() shapeId?: string;
  @ViewChild("scatterPlot") scatterPlot:
    | HTMLArcgisChartsScatterPlotElement
    | undefined;

  ngOnInit() {
    // define custom elements in the browser, and load the assets from the CDN
    defineChartsElements(window, {
      resourcesUrl: "https://js.arcgis.com/charts-components/4.29/t9n",
    });
    defineCalciteElements(window, {
      resourcesUrl: "https://js.arcgis.com/calcite-components/2.5.1/assets",
    });
    defineMapElements(window, {
      resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets",
    });

    // Call async functions here
    this.createScatterPlot();
  }

  // Async function to create a scatter plot
  async createScatterPlot() {
    var featureLayer;

    featureLayer = await loadFeatureLayer("8871626e970a4f3e9d6113ec63a92f2f");

    const scatterPlotParams = {
      layer: featureLayer,
      xAxisFieldName: "Earnings",
      yAxisFieldName: "Cost",
    };

    const scatterPlotModel = new ScatterPlotModel(scatterPlotParams);

    const config = await scatterPlotModel.config;

    if (this.scatterPlot !== undefined) {
      this.scatterPlot.config = config;
      this.scatterPlot.layer = featureLayer;
    }
  }
}
