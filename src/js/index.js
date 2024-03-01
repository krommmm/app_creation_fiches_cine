import inscription from './pages/inscription';
import connexion from './pages/connexion';
import creationFiches from './pages/creationFiches';
import affichageFilms from './pages/affichageFilms';
import GestionnaireServices from './class/service/gestionnaireServices';

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

// AFFICHER RECHERCHE
document.addEventListener("click",(event)=>{
	let clickedElement = event.target;
	if(clickedElement.classList.contains("fa-magnifying-glass")){
		document.querySelector("input[name='myInput']").style.display="flex";
	}
})

// RECHERCHE
document.addEventListener("input",async (event)=>{
	let clickedElement = event.target;
	if(clickedElement.classList.contains("searchBar")){

		let films = await new GestionnaireServices().getFilms();
		//console.log(films);
		let results = films.filter((film)=>{
			if(film.name.toLowerCase().includes(clickedElement.value.toLowerCase())){
				return film;
			}
		});
		console.log(results);
		let total = results.map((film)=>{
			return `<img class="mini_img row__poster" data-id=${film._id} src="trieuseFilm-master/../../../images/${film.imageUrl}" alt="" />`;                 
		})
		document.querySelector(".modal").innerHTML = `<div class="modal_content">
		<div class="modal_content_container">
			<h3 class="modalName">Films</h3>
		<div class="myButtons">
			<div class="button-top">
				<button class="closeModal btn red scale">
					close
				</button>
			</div>
			<div class="img_films">
			${total.join(" ")}
			</div>
			<div class="button-bottom">
			</div>
		</div>
	</div>`;
	document.querySelector('.modal').classList.remove('hidden');
	}
})

