import { Component } from "@angular/core";
import { CarrouselComponent } from "../../components/carrousel/carrousel.component";

@Component({
  selector: "app-landing",
  standalone: true,
  imports: [CarrouselComponent],
  templateUrl: "./landing.component.html",
  styleUrl: "./landing.component.css",
})
export class LandingComponent {}
