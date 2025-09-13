# 🔐 Configuration des Secrets GitHub

## Secrets Requis pour le Déploiement

### Pour GitHub Pages (automatique)

Aucun secret requis - utilise le token GitHub automatique.

### Pour Docker Registry (optionnel)

Si vous voulez pousser vers un registry privé :

- `DOCKER_REGISTRY_USERNAME` : Nom d'utilisateur du registry
- `DOCKER_REGISTRY_PASSWORD` : Mot de passe du registry

### Pour le Déploiement sur Infrastructure (optionnel)

Si vous voulez déployer sur votre propre infrastructure :

- `SSH_PRIVATE_KEY` : Clé privée SSH pour l'accès au serveur
- `DEPLOY_HOST` : Adresse du serveur de déploiement
- `DEPLOY_USER` : Utilisateur pour le déploiement
- `DEPLOY_PATH` : Chemin de déploiement sur le serveur

## Configuration des Secrets

1. Allez dans Settings → Secrets and variables → Actions
2. Cliquez sur "New repository secret"
3. Ajoutez chaque secret avec sa valeur

## Variables d'Environnement

### Développement

```bash
export NODE_ENV=development
export API_URL=http://localhost:8080
```

### Production

```bash
export NODE_ENV=production
export API_URL=https://api.neohoods.com
```

## Sécurité

- Ne jamais commiter les secrets dans le code
- Utiliser les secrets GitHub pour les valeurs sensibles
- Rotation régulière des clés et tokens
- Limiter les permissions des secrets au minimum nécessaire
