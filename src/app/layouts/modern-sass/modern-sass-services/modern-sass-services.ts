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
        "Gérez votre copropriété en ligne avec notre plateforme intuitive. ",
    },
    {
      img: "assets/images/saas2/our-feature/2.png",
      title: "Chat Communautaire",
      description:
        "Connectez les résidents dans un espace sécurisé. Partagez des informations, organisez des événements et renforcez les liens de voisinage.",
    },
    {
      img: "assets/images/saas2/our-feature/3.png",
      title: "Repertoire des Habitants",
      description:
        "Un répertoire des habitants avec leurs informations de contact pour pouvoir se contacter en cas d'urgence ou pour une question ou un besoin spécifique.",
    },
    {
      img: "assets/images/saas2/our-feature/4.png",
      title: "Installation & Intégration",
      description:
        "Nous venons dans votre copropriété pour installer notre solution qui s'intègre parfaitement avec votre système d'accès existant.",
    },
    {
      img: "assets/images/saas2/our-feature/5.png",
      title: "Chambres d'Hôtes et espaces communs",
      description:
        "Partager des espaces communs entre les résidents pour une économie collaborative.",
    },
    {
      img: "assets/images/saas2/our-feature/6.png",
      title: "Éco-Quartier",
      description:
        "Solutions durables pour un mode de vie respectueux de l'environnement. Innovation au service de la transition écologique.",
    },
  ];
}
