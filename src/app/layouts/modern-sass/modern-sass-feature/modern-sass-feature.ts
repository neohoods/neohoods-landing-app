import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-modern-sass-feature",
  imports: [CommonModule],
  templateUrl: "./modern-sass-feature.html",
  styleUrls: ["./modern-sass-feature.scss"],
})
export class ModernSassFeature {
  features = [
    {
      img: "assets/images/saas2/advance-feature/1.png",
      title: "Interface Intuitive",
      description:
        "Design moderne et ergonomique pour une expérience utilisateur optimale dans la gestion de votre copropriété.",
    },
    {
      img: "assets/images/saas2/advance-feature/2.png",
      title: "Support Dédié",
      description:
        "Équipe d'experts disponible 7j/7 pour vous accompagner dans l'utilisation de nos services et la transition écologique.",
    },
    {
      img: "assets/images/saas2/advance-feature/3.png",
      title: "Personnalisation",
      description:
        "Adaptez la plateforme aux spécificités de votre copropriété et aux besoins de vos résidents.",
    },
    {
      img: "assets/images/saas2/advance-feature/4.png",
      title: "Solutions Multiples",
      description:
        "Portfolio complet de services interconnectés pour une gestion globale de votre éco-quartier.",
    },
  ];
}
