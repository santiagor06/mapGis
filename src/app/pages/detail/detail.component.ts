import { Component, inject, signal } from "@angular/core";
import { MapComponent } from "../../components/map/map.component";
import { MapService } from "../../services/map.service";
import { Map } from "../../models/map.models";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MapMesureComponent } from "../../components/map-mesure/map-mesure.component";
import { MapTempComponent } from "../../components/map-temp/map-temp.component";
import { MapConflictComponent } from "../../components/map-conflict/map-conflict.component";

@Component({
  selector: "app-detail",
  standalone: true,
  imports: [
    MapComponent,
    CommonModule,
    MapMesureComponent,
    MapTempComponent,
    MapConflictComponent,
  ],
  templateUrl: "./detail.component.html",
  styleUrl: "./detail.component.css",
})
export class DetailComponent {
  id: string | null = null;
  private mapService = inject(MapService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  map = signal<Map | null>(null);

  ngOnInit() {
    this.getMap();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.getMap();
    });
  }
  getMap() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) this.map.set(this.mapService.getMap(this.id));
    console.log(this.map);
  }
}
