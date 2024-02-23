const fs = require('fs');

// Spécifiez le chemin du dossier que vous souhaitez lire
const dossierPath = './films';

// Utilisez la fonction readdir pour lire les noms de fichiers dans le dossier
fs.readdir(dossierPath, (err, fichiers) => {
	if (err) {
		console.error('Erreur de lecture du dossier :', err);
		return;
	}

	// Affichez les noms de fichiers
	fichiers.forEach((fichier) => {
		console.log(fichier);
	});
});

// lancer: node app.js

/*
	<div id="dropArea">
			<p>Glissez-déposez votre fichier MP4 ici</p>
		</div>
*/
