import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { TapToTop } from "../../../shared/components/tap-to-top/tap-to-top";

@Component({
  selector: "app-modern-sass-footer",
  imports: [TapToTop, CommonModule],
  templateUrl: "./modern-sass-footer.html",
  styleUrls: ["./modern-sass-footer.scss"],
})
export class ModernSassFooter {}
