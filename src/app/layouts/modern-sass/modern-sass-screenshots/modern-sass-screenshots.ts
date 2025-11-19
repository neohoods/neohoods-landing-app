import { CommonModule, isPlatformBrowser } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
  selector: "app-modern-sass-screenshots",
  imports: [CarouselModule, CommonModule],
  templateUrl: "./modern-sass-screenshots.html",
  styleUrls: ["./modern-sass-screenshots.scss"],
})
export class ModernSassScreenshots implements OnInit, OnDestroy {
  screenshots: { img: string; imgMobile?: string }[] = [];
  private resizeListener?: () => void;
  isMobile = false;

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

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {
    this.screenshots = [
      {
        img: "assets/images/saas2/screen-shot/screenshot-wall.png",
        imgMobile: "assets/images/saas2/screen-shot/screenshot-wall-mobile.png",
      },
      {
        img: "assets/images/saas2/screen-shot/screenshot-guest-room.png",
        imgMobile:
          "assets/images/saas2/screen-shot/screenshot-guest-room-mobile.png",
      },
      {
        img: "assets/images/saas2/screen-shot/screenshot-directory.png",
        imgMobile:
          "assets/images/saas2/screen-shot/screenshot-directory-mobile.png",
      },
    ];
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkMobile();
      this.resizeListener = () => this.checkMobile();
      window.addEventListener("resize", this.resizeListener);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
    }
  }

  private checkMobile() {
    if (!isPlatformBrowser(this.platformId)) return;

    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth < 768;

    // Only trigger change detection if the state actually changed
    if (wasMobile !== this.isMobile) {
      this.cdr.detectChanges();
    }
  }

  getImageSrc(screenshot: { img: string; imgMobile?: string }): string {
    if (!isPlatformBrowser(this.platformId)) {
      return screenshot.img;
    }

    return this.isMobile && screenshot.imgMobile
      ? screenshot.imgMobile
      : screenshot.img;
  }
}
