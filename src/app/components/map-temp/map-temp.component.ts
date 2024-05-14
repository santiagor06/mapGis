import { Component } from "@angular/core";
import { ComponentLibraryModule } from "@arcgis/charts-components-angular";
import { ComponentLibraryModule as ComponentMap } from "@arcgis/map-components-angular";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

@Component({
  selector: "app-map-temp",
  standalone: true,
  imports: [ComponentLibraryModule, ComponentMap],
  templateUrl: "./map-temp.component.html",
  styleUrl: "./map-temp.component.css",
})
export class MapTempComponent {
  ngOnInit() {
    // define custom elements in the browser, and load the assets from the CDN

    defineCalciteElements(window, {
      resourcesUrl: "https://js.arcgis.com/calcite-components/2.5.1/assets",
    });
    defineMapElements(window, {
      resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets",
    });
  }
}
