
# Trieuse de Film 

## Application qui créer des fiches pour des films

 <img style="width: 100px;" src="home.png" alt="connexion"/>   <img style="width: 100px;" src="focus_film.png" alt="focus"/>   <img style="width: 100px;" src="search_film.png" alt="search"/>  


## Technos :

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Description:
Server Node.js qui crud fiches de film et utilisateurs<br>
Les films sont à déposer dans le dossier "films"<br>
Après inscription et connexion, on a accès aux fiches et à la création de fiches supplémentaires<br>

## Ajout:
Ajouter 2 dossiers : images et films à la racine du projet<br>
Ajouter les films manuellement dans le dossier films<br>

 ## Compte mongoDB
 Créer un compte mongo db et renseigner les identifiants dans les variables d'environements
 
## Variables d'environnement:
A la racine du back : <br>
> USER="identifiants mongodb" (changer le nom et sa correspondance sur mac)<br>
> PASSWORD="passwordMongodb"<br>
> SECRET_KEY="chaine de charactères"<br>

### Installer node.js

### Installer les dépendances:

`npm install`

### Démarrer le serveur:
`node server`

### Mettre à jour l'application:
`npm run start`

### Lancer l'application:
Lancer le fichier index.html (pas de live serveur, car les films doivent se lire en local)
