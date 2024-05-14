import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { MapComponent } from "./components/map/map.component";
import { DetailComponent } from "./pages/detail/detail.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "map/:id", component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
