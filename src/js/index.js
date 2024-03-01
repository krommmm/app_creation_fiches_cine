import inscription from './pages/inscription';
import connexion from './pages/connexion';
import creationFiches from './pages/creationFiches';
import affichageFilms from './pages/affichageFilms';

const getPageName = () => {
	const PATH = window.location.pathname;
	const PARTS = PATH.split('/');
	const FILE_NAME = PARTS[PARTS.length - 1];
	const PAGE_NAME = FILE_NAME.replace('.html', '');
	return PAGE_NAME;
};

let pageName = getPageName();

switch (pageName) {
	case 'index':
		connexion();
		break;

	case 'inscription':
		inscription();
		break;

	case 'home':
		affichageFilms();
		break;

	case 'creationFiche':
		creationFiches();
		break;

	default:
		console.error('Page introuvable');
}



// DECONNEXION
document.addEventListener('click', (event) => {
	let clickedElement = event.target;
	if (clickedElement.classList.contains('deco')) {
		sessionStorage.clear();
		window.location.href = '../../index.html';
	}
});
