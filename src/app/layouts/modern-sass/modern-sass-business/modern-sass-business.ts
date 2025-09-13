import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-modern-sass-business",
  imports: [CommonModule],
  templateUrl: "./modern-sass-business.html",
  styleUrls: ["./modern-sass-business.scss"],
})
export class ModernSassBusiness {
  business = [
    {
      title: "Gestion Digitale Complète",
      description:
        "Centralisez tous les aspects de votre copropriété : documents, réunions, votes et communication en un seul endroit.",
    },
    {
      title: "Communauté Connectée",
      description:
        "Renforcez les liens entre résidents grâce à notre chat communautaire et nos outils de partage d'informations.",
    },
    {
      title: "Développement Durable",
      description:
        "Contribuez à la transition écologique avec nos services de drive partagé et de gestion optimisée des ressources.",
    },
  ];
}
