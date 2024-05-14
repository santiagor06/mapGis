import { Injectable } from "@angular/core";
import { mapData } from "../models/dataMap";
import { Map } from "../models/map.models";

@Injectable({
  providedIn: "root",
})
export class MapService {
  maps: Map[] = mapData;
  constructor() {}
  getMap(id: string) {
    const mapSelected = this.maps.find((m) => id == m.idMap);
    if (mapSelected) return mapSelected;
    else throw new Error("el mapa no se encuentra");
  }
}
