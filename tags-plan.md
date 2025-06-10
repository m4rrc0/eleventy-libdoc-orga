---
title: Tags
description: Tags
date: git Last Modified
layout: libdoc_page.liquid
eleventyNavigation:
  key: Tags
---

# Système de Tags

Ce système de tags est conçu pour faciliter la navigation et l'organisation des ressources de documentation. Chaque ressource peut être associée à plusieurs tags pour permettre une recherche et une catégorisation flexibles.

## Catégories de Tags

### Type de contenu

- `#concept` - Idées fondamentales et théories
- `#methode` - Processus structurés pour atteindre des objectifs
- `#outil` - Applications, dispositifs et supports concrets
- `#philosophie` - Approches et modes de pensée sous-jacents

### Niveau de complexité

- `#debutant` - Concepts accessibles sans connaissances préalables
- `#intermediaire` - Nécessite une familiarité avec les bases
- `#avance` - Approches sophistiquées ou nuancées

### Contexte d'application

- `#travail` - Organisation professionnelle
- `#personnel` - Vie personnelle et quotidienne
- `#numerique` - Environnement et outils digitaux
- `#papier` - Systèmes analogiques et physiques
- `#hybride` - Combinaison d'approches numériques et analogiques

### Problématique principale

- `#focus` - Amélioration de la concentration
- `#stress` - Gestion de la pression et de l'anxiété
- `#procrastination` - Lutte contre le report des tâches
- `#surcharge` - Gestion de l'excès d'information ou de travail
- `#decision` - Amélioration de la prise de décision
- `#planification` - Organisation du temps et des projets
- `#habitudes` - Création et maintien de routines efficaces

### Temps d'investissement

- `#rapide` - Mise en œuvre en moins de 5 minutes par jour
- `#modere` - Nécessite 5 à 15 minutes quotidiennes
- `#investissement` - Requiert plus de 15 minutes par jour
- `#ponctuel` - Application occasionnelle plutôt que régulière

### Bénéfices principaux

- `#clarte` - Amélioration de la clarté mentale
- `#efficacite` - Optimisation de la productivité
- `#serenite` - Réduction du stress et augmentation du bien-être
- `#creativite` - Stimulation de l'innovation et de la pensée divergente
- `#discipline` - Renforcement de l'autodiscipline et de la constance
- `#connaissance` - Amélioration de l'acquisition et de la rétention d'informations

## Utilisation des Tags

Les tags sont inclus dans l'en-tête YAML de chaque document de ressource sous cette forme :

```yaml
---
titre: "Nom de la ressource"
tags:
  - methode
  - intermediaire
  - numerique
  - focus
  - modere
---
```

Lors de la création d'une nouvelle ressource, veuillez sélectionner au moins un tag de chaque catégorie principale (type de contenu, niveau, contexte) et autant de tags supplémentaires que nécessaire dans les autres catégories.

## Navigation par Tags

Les tags permettent plusieurs façons de naviguer dans la documentation :

1. **Exploration thématique** - Découvrir des ressources liées à une problématique spécifique
2. **Filtrage contextuel** - Trouver des solutions adaptées à un environnement particulier
3. **Progression pédagogique** - Suivre un parcours du niveau débutant au niveau avancé
4. **Adaptation temporelle** - Choisir des méthodes en fonction du temps disponible

## Révision des Tags

Le système de tags sera périodiquement révisé pour s'assurer qu'il reste pertinent et utile. Les suggestions d'ajouts ou de modifications peuvent être soumises via le processus standard de contribution.
