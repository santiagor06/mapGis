import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SlickCarouselModule } from "ngx-slick-carousel";

@Component({
  selector: "app-carrousel",
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: "./carrousel.component.html",
  styleUrl: "./carrousel.component.css",
})
export class CarrouselComponent {
  slides = [
    {
      img: "assets/images/image1.jpg",
    },
    {
      img: "assets/images/image2.jpg",
    },
    {
      img: "assets/images/image3.jpg",
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    infinite: true,
  };
}
