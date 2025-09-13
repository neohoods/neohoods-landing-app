import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-modern-sass-header",
  imports: [CommonModule],
  templateUrl: "./modern-sass-header.html",
  styleUrls: ["./modern-sass-header.scss"],
})
export class ModernSassHeader {
  onRedirect(e: { preventDefault: () => void }) {
    e.preventDefault();
    let el: HTMLElement | null = document.getElementById("screenshot");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}
