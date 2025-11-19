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
      title: "Social",
      description:
        "Chat communautaire, portail d'information et répertoire des habitants pour renforcer les liens entre résidents et faciliter la communication.",
    },
    {
      title: "Space",
      description:
        "Gestion complète des espaces communs et conciergerie pour optimiser l'utilisation et la réservation de vos équipements partagés.",
    },
    {
      title: "Installation & Intégration",
      description:
        "Nous venons dans votre copropriété pour installer notre solution qui s'intègre parfaitement avec votre système d'accès existant.",
    },
  ];
}
