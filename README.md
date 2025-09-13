# Neohoods Landing Page

Landing page pour la plateforme Neohoods - Services innovants pour l'éco-quartier.

## 🏢 À Propos de Neohoods

Neohoods est une plateforme innovante qui révolutionne la vie de copropriété en proposant des services connectés et durables pour l'éco-quartier de demain.

### Services Principaux

- **Portal Digital** : Gestion complète de la copropriété en ligne
- **Chat Communautaire** : Espace de communication sécurisé entre résidents
- **Support Syndic** : Accompagnement personnalisé pour les syndics
- **Drive Partagé** : Service de livraison mutualisé pour réduire l'empreinte carbone
- **Chambres d'Hôtes** : Plateforme de location entre résidents
- **Éco-Quartier** : Solutions durables pour la transition écologique

## 🚀 Technologies Utilisées

- **Angular 20** - Framework principal
- **Bootstrap 5** - Framework CSS
- **SCSS** - Préprocesseur CSS
- **TypeScript** - Langage de programmation
- **ng-bootstrap** - Composants Bootstrap pour Angular

## 🎨 Design

- **Palette de couleurs** : Thème vert éco-quartier
- **Responsive** : Compatible mobile, tablette et desktop
- **Moderne** : Interface utilisateur intuitive et élégante

## 📦 Installation

1. **Prérequis**
   - Node.js (version 20.19.0 ou supérieure)
   - npm (version 6.11.0 ou supérieure)

2. **Installation des dépendances**

   ```bash
   npm install
   ```

3. **Démarrage du serveur de développement**

   ```bash
   ng serve
   ```

4. **Accès à l'application**
   Ouvrez votre navigateur sur `http://localhost:4200`

## 🏗️ Build et Déploiement

1. **Build de production**

   ```bash
   ng build --configuration production
   ```

2. **Les fichiers de production** seront générés dans le dossier `dist/`

## 📁 Structure du Projet

```
src/
├── app/
│   ├── layouts/
│   │   └── modern-sass/          # Layout principal
│   │       ├── modern-sass-header/     # Section header
│   │       ├── modern-sass-feature/    # Fonctionnalités
│   │       ├── modern-sass-services/   # Services
│   │       ├── modern-sass-business/   # Avantages
│   │       └── modern-sass-footer/     # Footer
│   └── shared/                   # Composants partagés
├── assets/                       # Ressources statiques
└── styles.scss                  # Styles globaux
```

## 🎯 Personnalisation

### Couleurs

Le thème utilise une palette verte personnalisée définie dans `public/assets/scss/neohoods-green.scss` :

- **Primary** : #2d7d32 (Vert principal)
- **Secondary** : #4caf50 (Vert secondaire)
- **Light** : #81c784 (Vert clair)
- **Dark** : #1b5e20 (Vert foncé)

### Contenu

- Modifiez les composants dans `src/app/layouts/modern-sass/`
- Les données sont définies dans les fichiers `.ts` de chaque composant
- Les images sont stockées dans `public/assets/images/`

## 🚀 CI/CD et Déploiement

### GitHub Actions

Le projet utilise GitHub Actions pour l'automatisation :

- **Build & Test** : Vérification automatique sur chaque push
- **Pull Request** : Tests sur les PR vers main
- **Deploy** : Déploiement automatique sur GitHub Pages
- **Docker** : Build et push d'images Docker

### Déploiement Automatique

- **GitHub Pages** : https://neohoods.github.io/neohoods-landing
- **Docker Hub** : `ghcr.io/neohoods/neohoods-landing`

### Scripts Disponibles

```bash
npm run start:prod    # Serveur de développement en mode production
npm run build:prod    # Build optimisé pour la production
npm run test:ci       # Tests en mode CI
npm run analyze       # Analyse de la taille du bundle
npm run docker:build  # Build de l'image Docker
npm run docker:run    # Exécution du conteneur Docker
```

## 📊 Monitoring et Performance

- **Bundle Analysis** : `npm run analyze`
- **Health Check** : `/health` endpoint
- **Performance** : Optimisations automatiques (gzip, cache, compression)

## 📞 Support

Pour toute question ou support technique, contactez l'équipe Neohoods.

## 📄 Licence

© 2025 Neohoods - Tous droits réservés
