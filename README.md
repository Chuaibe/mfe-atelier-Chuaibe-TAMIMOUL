# Projet Micro-Frontend (MFE) - Chuaibe

## Description
Ce projet implémente une application **Micro-Frontend** (MFE) simple en utilisant **Module Federation** de Webpack. Il se compose de deux parties :
- **Shell** : L'application hôte qui charge et intègre un micro-frontend.
- **Header MFE** : Un micro-frontend responsable de l'affichage du header de l'application.

### Objectifs du projet :
1. **Shell (hôte)** : Cette application héberge et intègre les micro-frontends via le mécanisme de `Module Federation`.
2. **Header MFE** : Un micro-frontend qui exporte un composant React pour le header.

## Structure du projet
Le projet est divisé en deux applications :
1. **Shell** : Le "container" principal de l'application hôte qui charge le micro-frontend "header".
2. **header-mfe** : Le micro-frontend du header.

La structure du projet est la suivante :

shell/ # Application hôte (container)

src/
index.js # Point d'entrée de l'application hôte
App.js # Composant principal du shell
App.css # Styles de l'application hôte
webpack.config.js # Configuration Webpack pour le shell
package.json # Dépendances et scripts du shell
header-mfe/ # Micro-frontend du header

src/
index.js # Point d'entrée du micro-frontend
Header.js # Composant header
webpack.config.js # Configuration Webpack pour le micro-frontend
package.json # Dépendances et scripts du micro-frontend
.gitignore # Fichier pour ignorer node_modules et autres fichiers

README.md # Documentation du projet

bash
Copier
Modifier

## Prérequis
- **Node.js** (version >= 14)
- **npm** (version >= 6)

## Installation

### Cloner le projet
Clonez ce projet depuis GitHub et accédez au répertoire du projet :
```bash
git clone https://github.com/[votre-nom-utilisateur]/mfe-atelier-chuaibe.git
cd mfe-atelier-chuaibe
Installation des dépendances
Une fois dans le répertoire du projet, installez les dépendances pour chaque application :

Pour le Shell :
bash
Copier
Modifier
cd shell
npm install
Pour le header-mfe :
bash
Copier
Modifier
cd ../header-mfe
npm install
Lancer le projet
Lancer l'application Shell
Ouvrez un terminal dans le répertoire shell.
Lancez l'application avec :
bash
Copier
Modifier
npm start
Cela démarre l'application sur http://localhost:3002.

Lancer le Micro-Frontend Header
Ouvrez un autre terminal dans le répertoire header-mfe.
Lancez le micro-frontend avec :
bash
Copier
Modifier
npm start
Cela démarre le micro-frontend sur http://localhost:3001.

Une fois que les deux applications sont en cours d'exécution, vous pouvez accéder à l'application Shell sur http://localhost:3002, qui charge le micro-frontend header à partir de http://localhost:3001.

Fonctionnement
Le Shell (l'application hôte) utilise ModuleFederationPlugin pour importer le micro-frontend header depuis l'URL spécifiée.
Le micro-frontend header exporte un composant React, qui est rendu dans l'application Shell.
Technologies utilisées :
React : Bibliothèque pour la construction d'interfaces utilisateur.
Webpack : Module bundler utilisé pour configurer le projet avec ModuleFederationPlugin.
Module Federation : Permet de partager des composants entre différentes applications, en l'occurrence entre le Shell et le micro-frontend header.
Scripts
npm start
Lance les serveurs de développement pour chaque application.

npm run build
Crée une version optimisée de l'application pour la production.

GitHub
Le dépôt GitHub du projet est disponible à l'adresse suivante :

bash
Copier
Modifier
https://github.com/[votre-nom-utilisateur]/mfe-atelier-chuaibe
Notes supplémentaires
Assurez-vous que vous avez installé Node.js et npm avant de démarrer.
Si vous rencontrez des problèmes, vérifiez les logs de votre terminal pour plus d'informations sur les erreurs éventuelles.
Utilisez les commandes npm run build pour préparer la version de production de chaque application si vous souhaitez déployer.
Auteurs
Chuaibe - Création et développement du projet.