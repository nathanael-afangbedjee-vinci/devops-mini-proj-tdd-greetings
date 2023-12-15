# DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations

- N° de groupe : 68
- Membres du groupe :
  Afangbedjee Nathanael
  Amaral Lopes Tiago André
  El Hannouti Ali
Lien du repo:
https://github.com/nathanael-afangbedjee-vinci/devops-mini-proj-tdd-greetings

## Énoncé

### Pré-requis :

- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests

### Ajouter ce fichier MD à votre mini-projet-1

Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue

L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request

Ouvrez une Pull Request / Merge Request
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.

Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.

```bash
Lorsequ'on fait un pull request le workflows se lance. Ensuite dans le fichier yml on fait un checkout du code nodeJs et on intègre l'environnement nodeJs. Par après on installe les dépendances et on execute toutes les commandes en commençant par heure de début de la pipeline et en finissant par un message qui indique qu'il n'y a pas d'erreur. 
```

- En particulier : à quoi sert le “on” ? dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ?

```bash
Dans notre fichier yml le on veut dire que notre workflow c'est lancer 

On push enclenche le workflow lorsequ'on push quelque chose dans notre code et on pull request veut dire qu'il s'active quand l'on fait un pull dans notre code 

Pour nous on pull request est le mieux car on peut voir nos erreur avant de merge
```

- Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.

```bash
Run execute simplement la commande alors que run_on signifie que l'on va l'exécuter sur un environnement bien précis 
```

- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline.

```bash
Use est utilisé lorsqu'on réutilise du code alors que run est une nouvelle commande que l'on va écrire
```

- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.

```bash
Oui on peut le faire mais cela ne respectera pas l'énoncé donné car il est nécessaire d'avoir l'heure de debut de la pipeline après l'installation des dépendances et avoir l'heure de fin de la pipeline en fin de code
```

- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?

```bash
On ajoute un nouveau run dans notre code
Les questions qu'il faut se poser sont:
Comment secure_app fonctionne ?
Où dois-je le placer dans mon code ?À t'elle besoin d'un environnement différents que celui que j'utilise ? 
```
