import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
  selector: "app-modern-sass-screenshots",
  imports: [CarouselModule, CommonModule],
  templateUrl: "./modern-sass-screenshots.html",
  styleUrls: ["./modern-sass-screenshots.scss"],
})
export class ModernSassScreenshots {
  screenshots = [
    {
      img: "assets/images/saas2/screen-shot/screenshot-chat.png",
    },
    {
      img: "assets/images/saas2/screen-shot/screenshot-oshelf.png",
    },
    {
      img: "assets/images/saas2/screen-shot/screenshot-portal.png",
    },
  ];

  screenshotscarouselOptions = {
    items: 3,
    margin: 0,
    autoHeight: true,
    nav: false,
    autoplay: false,
    center: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      360: {
        items: 1,
        margin: 10,
      },
      1000: {
        items: 3,
      },
    },
  };
}
