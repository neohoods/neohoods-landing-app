import { Component } from "@angular/core";

import { Menu } from "../../../shared/components/navigation/menu/menu";

@Component({
  selector: "app-modern-sass-nav",
  imports: [Menu],
  templateUrl: "./modern-sass-nav.html",
  styleUrls: ["./modern-sass-nav.scss"],
})
export class ModernSassNav {}
