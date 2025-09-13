import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

import { ModernSassBrand } from "./modern-sass-brand/modern-sass-brand";
import { ModernSassBusiness } from "./modern-sass-business/modern-sass-business";
import { ModernSassFeature } from "./modern-sass-feature/modern-sass-feature";
import { ModernSassFooter } from "./modern-sass-footer/modern-sass-footer";
import { ModernSassHeader } from "./modern-sass-header/modern-sass-header";
import { ModernSassNav } from "./modern-sass-nav/modern-sass-nav";
import { ModernSassPricing } from "./modern-sass-pricing/modern-sass-pricing";
import { ModernSassScreenshots } from "./modern-sass-screenshots/modern-sass-screenshots";
import { ModernSassServices } from "./modern-sass-services/modern-sass-services";
import { ModernSassTestimonial } from "./modern-sass-testimonial/modern-sass-testimonial";

@Component({
  selector: "app-modern-sass",
  imports: [
    ModernSassNav,
    ModernSassBrand,
    ModernSassBusiness,
    ModernSassFeature,
    ModernSassFooter,
    ModernSassHeader,
    ModernSassServices,
    ModernSassTestimonial,
    ModernSassScreenshots,
    ModernSassPricing,
  ],
  templateUrl: "./modern-sass.html",
  styleUrls: ["./modern-sass.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ModernSass implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data["title"]);
  }
}
