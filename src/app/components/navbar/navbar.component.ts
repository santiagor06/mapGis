import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterLink, CommonModule,RouterLinkActive],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  links = [
    {
      title: "Climático",
      path: "map/635fb805ecfe4a8cbad3e58cca8a4bd3",
    },
    {
      title: "Conflictos",
      path: "map/5d149acd55c74e6cb9373c4922a10776",
    },
    {
      title: "Universidades",
      path: "map/a72bb6468f57491f84409186446808e1",
    },
    {
      title: "Medición",
      path: "map/5ce0de673d3b41a3bf3a217942211c4b",
    },
  ];
}
