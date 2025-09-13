import { Routes } from "@angular/router";

export const Layout: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./modern-sass/modern-sass").then((m) => m.ModernSass),
    data: {
      title: "Neohoods - Plateforme Éco-Quartier",
    },
  },
  {
    path: "portal",
    loadComponent: () =>
      import("./modern-sass/modern-sass").then((m) => m.ModernSass),
    data: {
      title: "Portal - Neohoods",
    },
  },
  {
    path: "chat",
    loadComponent: () =>
      import("./modern-sass/modern-sass").then((m) => m.ModernSass),
    data: {
      title: "Chat - Neohoods",
    },
  },
  {
    path: "oshelf",
    loadComponent: () =>
      import("./modern-sass/modern-sass").then((m) => m.ModernSass),
    data: {
      title: "OShelf - Neohoods",
    },
  },
];
