import { Component } from "@angular/core";

@Component({
  selector: "app-modern-sass-services",
  imports: [],
  templateUrl: "./modern-sass-services.html",
  styleUrls: ["./modern-sass-services.scss"],
})
export class ModernSassServices {
  services = [
    {
      img: "assets/images/saas2/our-feature/1.png",
      title: "Portal Digital",
      description:
        "Gérez votre copropriété en ligne avec notre plateforme intuitive. Accès 24/7 aux documents, réunions et informations importantes.",
    },
    {
      img: "assets/images/saas2/our-feature/2.png",
      title: "Chat Communautaire",
      description:
        "Connectez les résidents dans un espace sécurisé. Partagez des informations, organisez des événements et renforcez les liens de voisinage.",
    },
    {
      img: "assets/images/saas2/our-feature/3.png",
      title: "Support Syndic",
      description:
        "Accompagnement personnalisé pour votre syndic. Outils de gestion avancés et support technique dédié pour une administration optimale.",
    },
    {
      img: "assets/images/saas2/our-feature/4.png",
      title: "Drive Partagé",
      description:
        "Optimisez les livraisons et réduisez l'empreinte carbone. Service de drive mutualisé pour tous les résidents de votre éco-quartier.",
    },
    {
      img: "assets/images/saas2/our-feature/5.png",
      title: "Chambres d'Hôtes",
      description:
        "Monétisez vos espaces inutilisés. Plateforme de location de chambres d'hôtes entre résidents pour une économie collaborative.",
    },
    {
      img: "assets/images/saas2/our-feature/6.png",
      title: "Éco-Quartier",
      description:
        "Solutions durables pour un mode de vie respectueux de l'environnement. Innovation au service de la transition écologique.",
    },
  ];
}
