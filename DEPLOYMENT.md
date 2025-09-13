# 🚀 Guide de Déploiement - Neohoods Landing Page

## 📋 Prérequis

- Node.js 20+
- npm 6+
- Docker (optionnel)
- Compte GitHub avec accès au repository

## 🏗️ Déploiement Local

### 1. Installation

```bash
npm install
```

### 2. Développement

```bash
npm start
# ou
ng serve
```

### 3. Build de production

```bash
npm run build:prod
```

### 4. Test local du build

```bash
npx http-server dist/neohoods-landing -p 8080
```

## 🐳 Déploiement Docker

### 1. Build de l'image

```bash
docker build -t neohoods-landing .
```

### 2. Exécution du conteneur

```bash
docker run -p 8080:80 neohoods-landing
```

### 3. Accès à l'application

Ouvrez http://localhost:8080

## 🌐 Déploiement GitHub Pages

### 1. Configuration automatique

Le déploiement se fait automatiquement via GitHub Actions :

- Push sur la branche `main` → Déploiement automatique
- Workflow manuel disponible dans l'onglet Actions

### 2. Configuration manuelle

1. Allez dans Settings → Pages
2. Source : GitHub Actions
3. Le workflow `pages.yml` se charge du reste

### 3. URL de production

https://neohoods.github.io/neohoods-landing

## 🏢 Déploiement sur Infrastructure

### 1. Build pour production

```bash
npm run build:prod
```

### 2. Copier les fichiers

```bash
cp -r dist/neohoods-landing/* /var/www/html/
```

### 3. Configuration Nginx

Utilisez le fichier `nginx.conf` fourni pour la configuration du serveur web.

## 🔧 Variables d'Environnement

### Développement

- `apiUrl`: http://localhost:8080
- `production`: false

### Production

- `apiUrl`: https://api.neohoods.com
- `production`: true

## 📊 Monitoring

### Health Check

- Endpoint : `/health`
- Retourne : `healthy` si l'application fonctionne

### Logs

- Docker : `docker logs <container_id>`
- Nginx : `/var/log/nginx/access.log` et `/var/log/nginx/error.log`

## 🚨 Troubleshooting

### Erreur de build

```bash
# Nettoyer le cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Erreur de déploiement

1. Vérifier les logs GitHub Actions
2. S'assurer que tous les tests passent
3. Vérifier la configuration des secrets

### Problème de routage Angular

- Vérifier la configuration nginx.conf
- S'assurer que `try_files $uri $uri/ /index.html;` est présent

## 📈 Optimisations

### Bundle Analysis

```bash
npm run analyze
```

### Performance

- Images optimisées
- Gzip activé
- Cache des assets statiques
- Compression des fichiers

## 🔐 Sécurité

### Headers de sécurité

- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

### HTTPS

- Configuration SSL/TLS recommandée en production
- Redirection HTTP → HTTPS

## 📞 Support

Pour toute question sur le déploiement, contactez l'équipe Neohoods.
