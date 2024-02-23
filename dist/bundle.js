(()=>{"use strict";const t=class{constructor(){this.regexEmail=/[\w-\.]+@[\w-]+\.+[\w]{1,10}$/,this.regexNom=/^[@$&!?\w]{2,}$/g,this.regexMdp=/^[@$&!?\w]{4,}$/g}testRegexMail(t){return!!this.regexEmail.test(t)}testRegexNom(t){return!!this.regexNom.test(t)}testRegexMdp(t){return!!this.regexMdp.test(t)}},e=class{constructor(){this.inscriptionUrl="http://localhost:2000/api/auth/signup",this.connexionUrl="http://localhost:2000/api/auth/login",this.fichiersUrl="http://localhost:2000/api/fichiers",this.films="http://localhost:2000/api/films"}async inscription(t,e,n){try{const i=await fetch(this.inscriptionUrl,{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({name:t,email:e,password:n})});return await i.json()}catch(t){return t}}async connexion(t,e){try{const n=await fetch(this.connexionUrl,{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({email:t,password:e})});return await n.json()}catch(t){return t}}async getFilms(){try{const t=await fetch(this.films);return await t.json()}catch(t){return t}}async getNomDesFichiers(){try{const t=await fetch(this.fichiersUrl);return await t.json()}catch(t){return t}}async ouvrirFichier(t){try{const e=await fetch("http://localhost:2000/api/fichiers",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({fichier:t})});return await e.json()}catch(t){throw t}}async envoieFiche(t){try{const e=await fetch(this.films,{method:"POST",body:t});return await e.json()}catch(t){return t}}async deleteFiche(t){try{const e=await fetch(`http://localhost:2000/api/films/${t}`,{method:"DELETE"});return await e.json()}catch(t){return t}}},n=class{constructor(){this.fiche={}}afficherNom(t){return`\n        <div class="container">\n             <h2>Quel est le titre du film du fichier "${t} ?</h2>\n             <form id="ficheNomInput">\n                  <input  class="inputFiche" type="text" />\n                  <br/>\n                   <input type="submit" class="btn red nextGenre medium" value="Suivant">\n             </form>\n           \n        </div>\n        `}getNom(){let t=document.getElementById("ficheNomInput"),e=document.querySelector(".inputFiche");t.addEventListener("submit",(t=>{t.preventDefault(),console.log(e.value);let n={name:e.value};localStorage.setItem("fiche",JSON.stringify(n))}))}afficherImg(){return'\n        <div class="container">\n      \n             <h2>Ajouter une image du film ?</h2>\n             <form id="ficheImageInput">\n                 <div id="dropArea">\n                     <label for="fileInput" class="fileLabel"><button class="btn red">Telecharger une image</button>\n                         <input class="btn red newFile" id="fileInput" type="file" value="telecharger image" />\n                        <img id="myImage" alt="" />\n                    </label> \n                    <p>ou déposez un fichier</p>\n                 </div>\n                 <br/>\n                   <button type="button" class="btn red final medium">Suivant</button>\n             </form>\n           \n        </div>\n        '}afficherGenre(){return'\n        <div class="container">\n        <h2>Choisir un genre </h2>\n      <div class="genre_container center">\n       \n          \n                <div class="genre genre_action" data-genre="action">\n                    <p>Action</p>\n                </div>\n                <div class="genre genre_comedie" data-genre="comedie">\n                <p>Comédie</p>\n            </div>\n            <div class="genre genre_aventure" data-genre="aventure">\n            <p>Aventure</p>\n        </div>\n                <div class="genre genre_sf" data-genre="sf">\n                     <p>Sf</p>\n                </div>\n                <div class="genre genre_anime" data-genre="anime">\n                <p>Anime</p>\n                 </div>\n                 <div class="genre genre_drame" data-genre="drame">\n                 <p>Drame</p>\n            </div>\n            <div class="genre genre_horreur" data-genre="horreur">\n            <p>Horreur</p>\n       </div>\n       <div class="genre genre_romance" data-genre="romance">\n       <p>Romance</p>\n  </div>\n  <div class="genre genre_fantastique" data-genre="fantastique">\n  <p>fantastique</p>\n</div>\n<div data-genre="thriller" class="genre genre_thriller">\n<p>thriller</p>\n</div>\n\n\n</div>\n<button type="button" class="btn red nextDirector medium">Suivant</button>\n        </div>\n      \n        '}getGenre(){document.querySelectorAll(".genre").forEach((t=>{t.addEventListener("click",(()=>{let e=t.dataset.genre,n=JSON.parse(localStorage.getItem("fiche"));n.genre=e,localStorage.setItem("fiche",JSON.stringify(n))}))}))}afficherDirecteur(){return'\n        <div class="container">\n             <h2>Quel est le réalisateur et l\'année ?</h2>\n             <form id="ficheRealisateurInput">\n                  <label>Réalisateur:</label>\n                  <input class="inputFiche" type="text" />\n                  <label>Année:</label>\n                  <input class="inputYear" type="text" />\n                  <br/>\n                   <input type="submit" class="btn red nextImg medium" value="Suivant">\n             </form>\n        </div>\n        '}getDirecteur(){let t=document.getElementById("ficheRealisateurInput"),e=document.querySelector(".inputFiche"),n=document.querySelector(".inputYear");t.addEventListener("submit",(t=>{t.preventDefault();let i=e.value,a=n.value,s=JSON.parse(localStorage.getItem("fiche"));s.directeur=i,s.annee=a,localStorage.setItem("fiche",JSON.stringify(s))}))}},i=class{constructor(t){this.films=t}afficherFilms(){let t=document.createElement("div");return t.className="containerDesRows",t.innerHTML='\n\t\t\t<div class="modal hidden">\n\t\t\t\t<div class="modal_content">\n\t\t\t\t\t<div class="modal_content_container">\n\t\t\t\t\t\t<h3 class="modalName">titre</h3>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tDirecteur :\n\t\t\t\t\t\t\t<span class="modalDirecteur little">spielberg</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAnnée : <span class="modalAnnee little">1999</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>genre : <span class="modalGenre little"></span></p>\n\n\t\t\t\t\t\t<img class="imageModal" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="myButtons">\n\t\t\t\t\t\t<div class="button-top">\n\t\t\t\t\t\t\t<button class="closeModal btn red scale">\n\t\t\t\t\t\t\t\tclose\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="button-bottom">\n\t\t\t\t\t\t\t<button class="copy btn-lecture margin">\n\t\t\t\t\t\t\t\tCopier le nom du fichier\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<a  class="aGogo"\n\t\t\t\t\t\t\t\t><button class="goFilm btn-lecture margin">\n\t\t\t\t\t\t\t\t\t<i class="fa-solid fa-caret-right"></i\n\t\t\t\t\t\t\t\t\t>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lecture\n\t\t\t\t\t\t\t\t</button></a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<button class="deleteFiche btn-lecture margin">\n\t\t\t\t\t\t\t\tSupprimer la fiche\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class="sameDirector btn-lecture margin">\n\t\t\t\t\t\t\tFilms du même réalisateur\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',["action","comedie","aventure","sf","anime","drame","horreur","romance","fantastique","thriller"].forEach((e=>{let n=document.createElement("div");n.className="row";let i=document.createElement("h2"),a=document.createTextNode(`NETFLIX ${e.toUpperCase()}`);i.appendChild(a),n.appendChild(i);let s=document.createElement("div");s.className="row__posters slid1";for(let t=0;t<this.films.length;t++)if(this.films[t].genre===`${e}`){let e=document.createElement("img");e.className="row__poster",e.setAttribute("src",`http://localhost:2000/images/${this.films[t].imageUrl}`),e.setAttribute("data-id",`${this.films[t]._id}`),s.appendChild(e);let i=document.createElement("i");i.className=`fa-solid fa-angle-left ${this.films[t].genre}Left`;let a=document.createElement("i");a.className=`fa-solid fa-angle-right ${this.films[t].genre}Right`,n.appendChild(i),n.appendChild(a)}n.appendChild(s),t.appendChild(n)})),t}},a=class{constructor(){this.cpt=0}tournerAGauche(t){let e=t.closest(".row"),n=(e.getBoundingClientRect().width,e.querySelector(".row__posters")),i=n.getBoundingClientRect().width,a=e.querySelector(".row__poster").getBoundingClientRect().width;this.cpt>0&&this.cpt--;let s=i*this.cpt,r=Math.floor(i/a),o=n.childElementCount;return Math.floor(o/r),n.style.transform=`translateX(${-s}px)`,this.cpt}tournerADroite(t){let e=t.closest(".row"),n=(e.getBoundingClientRect().width,e.querySelector(".row__posters")),i=n.getBoundingClientRect().width,a=e.querySelector(".row__poster").getBoundingClientRect().width,s=Math.floor(i/a),r=n.childElementCount,o=Math.floor(r/s);this.cpt===o?this.cpt=0:this.cpt<o&&this.cpt++;let c=i*this.cpt;return n.style.transform=`translateX(${-c}px)`,this.cpt}};"Netflix inscription"===document.title?(()=>{let n=document.querySelector(".nameInput"),i=document.querySelector(".emailInput"),a=document.querySelector(".mdpInput");n.addEventListener("input",(e=>{let n=(new t).testRegexNom(e.target.value),i=document.querySelector(".msgErrorNom");n?i.classList.add("hidden"):i.classList.remove("hidden")})),i.addEventListener("input",(e=>{let n=(new t).testRegexMail(e.target.value),i=document.querySelector(".msgErrorEmail");n?i.classList.add("hidden"):i.classList.remove("hidden")})),a.addEventListener("input",(e=>{let n=(new t).testRegexMdp(e.target.value),i=document.querySelector(".msgErrorMdp");n?i.classList.add("hidden"):i.classList.remove("hidden")}));let s=document.getElementById("formulaireInscription"),r=document.querySelector(".errorInscription"),o=document.querySelector(".inscriptionReussie");s.addEventListener("submit",(t=>{t.preventDefault(),(async()=>{let t=document.querySelector(".nameInput").value,n=document.querySelector(".emailInput").value,i=document.querySelector(".mdpInput").value,a=(new e).inscription(t,n,i),s=await a;console.log(s),"Utilisateur créé ! "!==s.msg?(setTimeout((()=>{r.classList.add("hidden")}),3e3),r.classList.remove("hidden")):(r.classList.add("hidden"),setTimeout((()=>{o.classList.add("hidden")}),3e3),o.classList.remove("hidden"))})()}))})():"Netflix connexion"===document.title?(async()=>{document.querySelector(".emailInputCo").addEventListener("input",(e=>{let n=(new t).testRegexMail(e.target.value),i=document.querySelector(".msgErrorEmailCo");n?i.classList.add("hidden"):i.classList.remove("hidden")}));let n=document.getElementById("formulaireConnexion"),i=document.querySelector(".errorCo");n.addEventListener("submit",(t=>{t.preventDefault(),(async()=>{let t=document.querySelector(".emailInputCo").value,n=document.querySelector(".mdpCo").value,a=(new e).connexion(t,n),s=await a;if(console.log(s),"paire mail/mdp incorrecte"!==s.msg){let t=s;sessionStorage.setItem("token",JSON.stringify(t)),window.location.href="src/html/home.html"}else setTimeout((()=>{i.classList.add("hidden")}),3e3),i.classList.remove("hidden")})()}))})():"Netflix Création fiche"===document.title?(()=>{let t=null,i=null,a=document.getElementById("question");const s=async t=>{let e=new n;a.innerHTML=e.afficherNom(t),e.getNom()};(async()=>{let n=(new e).getFilms();t=await n,(async()=>{let n=(new e).getNomDesFichiers();i=await n;for(const e of i.fichiers)if(!t.some((t=>t.trueName===e))){localStorage.setItem("trueName",JSON.stringify(e)),s(e);break}})()})(),document.addEventListener("click",(t=>{t.target.classList.contains("nextDirector")&&(()=>{let t=new n;setTimeout((()=>{a.innerHTML=t.afficherDirecteur(),t.getDirecteur()}),10)})()})),document.addEventListener("click",(t=>{t.target.classList.contains("nextGenre")&&(()=>{let t=new n;setTimeout((()=>{a.innerHTML=t.afficherGenre(),t.getGenre()}),10)})()})),document.addEventListener("click",(t=>{t.target.classList.contains("nextImg")&&(async()=>{let t=new n;setTimeout((()=>{a.innerHTML=t.afficherImg()}),10)})()})),document.addEventListener("input",(t=>{let e=t.target;if(e.classList.contains("newFile")){let t=document.getElementById("myImage");t.src=URL.createObjectURL(e.files[0]),t.style.transform="translateY(0px)"}})),document.addEventListener("click",(async t=>{if(t.target.classList.contains("final")){let t=new Promise(((t,n)=>{(async()=>{let t=document.querySelector(".newFile"),n=JSON.parse(localStorage.getItem("fiche")),i=JSON.parse(localStorage.getItem("trueName"));var a=new FormData;a.append("images",t.files[0]),a.append("name",n.name),a.append("genre",n.genre),a.append("director",n.directeur),a.append("year",parseInt(n.annee)),a.append("trueName",i);let s=new e,r=await s.envoieFiche(a);setTimeout((()=>{window.location.reload()}),10),console.log(r)})(),setTimeout((()=>{t()}),3e3)}));await t}}))})():"Netflix home"===document.title&&(async()=>{let t=new e,n=await t.getFilms(),s=new i(n),r=document.querySelector(".films_container"),o=s.afficherFilms();r.appendChild(o),document.addEventListener("click",(t=>{t.target.classList.contains("closeModal")&&(document.querySelector(".modal").innerHTML='<div class="modal_content">\n\t\t\t<div class="modal_content_container">\n\t\t\t\t<h3 class="modalName">titre</h3>\n\t\t\t\t<p>\n\t\t\t\t\tDirecteur :\n\t\t\t\t\t<span class="modalDirecteur little">spielberg</span>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tAnnée : <span class="modalAnnee little">1999</span>\n\t\t\t\t</p>\n\t\t\t\t<p>genre : <span class="modalGenre little"></span></p>\n\n\t\t\t\t<img class="imageModal" />\n\t\t\t</div>\n\t\t\t<div class="myButtons">\n\t\t\t\t<div class="button-top">\n\t\t\t\t\t<button class="closeModal btn red scale">\n\t\t\t\t\t\tclose\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class="button-bottom">\n\t\t\t\t\t<button class="copy btn-lecture margin">\n\t\t\t\t\t\tCopier le nom du fichier\n\t\t\t\t\t</button>\n\t\t\t\t\t<a  class="aGogo"\n\t\t\t\t\t\t><button class="goFilm btn-lecture margin">\n\t\t\t\t\t\t\t<i class="fa-solid fa-caret-right"></i\n\t\t\t\t\t\t\t>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lecture\n\t\t\t\t\t\t</button></a\n\t\t\t\t\t>\n\t\t\t\t\t<button class="deleteFiche btn-lecture margin">\n\t\t\t\t\t\tSupprimer la fiche\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class="sameDirector btn-lecture margin">\n\t\t\t\t\tFilms du même réalisateur\n\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',document.querySelector(".modal").classList.add("hidden"))})),document.addEventListener("click",(t=>{let e=t.target;if(e.classList.contains("row__poster")||e.classList.contains("row__poster_Mini")){document.querySelector(".modal").innerHTML='<div class="modal_content">\n\t\t\t<div class="modal_content_container">\n\t\t\t\t<h3 class="modalName">titre</h3>\n\t\t\t\t<p>\n\t\t\t\t\tDirecteur :\n\t\t\t\t\t<span class="modalDirecteur little">spielberg</span>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tAnnée : <span class="modalAnnee little">1999</span>\n\t\t\t\t</p>\n\t\t\t\t<p>genre : <span class="modalGenre little"></span></p>\n\n\t\t\t\t<img class="imageModal" />\n\t\t\t</div>\n\t\t\t<div class="myButtons">\n\t\t\t\t<div class="button-top">\n\t\t\t\t\t<button class="closeModal btn red scale">\n\t\t\t\t\t\tclose\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class="button-bottom">\n\t\t\t\t\t<button class="copy btn-lecture margin">\n\t\t\t\t\t\tCopier le nom du fichier\n\t\t\t\t\t</button>\n\t\t\t\t\t<a  class="aGogo"\n\t\t\t\t\t\t><button class="goFilm btn-lecture margin">\n\t\t\t\t\t\t\t<i class="fa-solid fa-caret-right"></i\n\t\t\t\t\t\t\t>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lecture\n\t\t\t\t\t\t</button></a\n\t\t\t\t\t>\n\t\t\t\t\t<button class="deleteFiche btn-lecture margin">\n\t\t\t\t\t\tSupprimer la fiche\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class="sameDirector btn-lecture margin">\n\t\t\t\t\tFilms du même réalisateur\n\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>';let t=e.dataset.id,i=n.filter((e=>e._id===t));console.log(i);let a=i[0].name,s=i[0].director,r=i[0].genre,o=i[0].year,c=i[0].trueName,l=i[0].imageUrl;document.querySelector(".sameDirector").setAttribute("data-id",`${s}`),document.querySelector(".aGogo").setAttribute("href",`trieuseFilm-master/../../../films/${c}`),document.querySelector(".imageModal").setAttribute("src",`trieuseFilm-master/../../../images/${l}`),document.querySelector(".modalName").innerHTML=a,document.querySelector(".modalGenre").innerHTML=r,document.querySelector(".modalAnnee").innerHTML=o,document.querySelector(".modalDirecteur").innerHTML=s,document.querySelector(".copy").setAttribute("data-id",c),document.querySelector(".goFilm").setAttribute("data-id",c),document.querySelector(".deleteFiche").setAttribute("data-id",t),document.querySelector(".modal").classList.remove("hidden")}})),document.addEventListener("click",(t=>{let e=t.target;if(e.classList.contains("copy")){let t=e.dataset.id,n=document.createElement("textArea");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}})),document.addEventListener("click",(async t=>{let n=t.target;if(n.classList.contains("deleteFiche")){if("o"!==prompt("Voulez vous vraiment supprimer cette fiche ? O/N ").toLowerCase())return;let t=n.dataset.id;(new e).deleteFiche(t);let a=await(new e).getFilms(),s=new i(a).afficherFilms();console.log(s.innerHTML);let r=document.querySelector(".films_container");r.innerHTML="",r.appendChild(s)}})),document.addEventListener("click",(async t=>{let n=t.target;if(n.classList.contains("sameDirector")){let t=await(new e).getFilms(),a=n.dataset.id,s=t.filter((t=>t.director.trim().toLowerCase()===a.trim().toLowerCase())),r=document.querySelector(".films_container");r.innerHTML="",r.appendChild(new i(t).afficherFilms()),document.querySelector(".modal").classList.remove("hidden");let o='\n\t\t\t<div class="toutou_container">\n\t\t\t<button class="closeModal btn red scale small100">\n\t\t\t\t\t\tclose\n\t\t\t\t\t</button>\n\t\t\t<div class="newContainer">  \n\t\t\t\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t';document.querySelector(".modal_content").innerHTML=o;let c=document.querySelector(".newContainer");s.forEach((t=>{let e=document.createElement("img");e.className="imgSameDirector row__poster_Mini",e.setAttribute("src",`../../images/${t.imageUrl}`),e.setAttribute("data-id",`${t._id}`),c.appendChild(e)}))}})),window.addEventListener("scroll",(()=>{window.scrollY>=100?nav.classList.add("nav__black"):nav.classList.remove("nav__black")}));let c=new a,l=new a,d=new a,u=new a,m=new a,p=new a,h=new a,g=new a,f=new a,v=new a;document.addEventListener("click",(t=>{let e=t.target;e.classList.contains("actionLeft")?c.tournerAGauche(e):e.classList.contains("actionRight")&&c.tournerADroite(e),e.classList.contains("comedieLeft")?l.tournerAGauche(e):e.classList.contains("comedieRight")&&l.tournerADroite(e),e.classList.contains("aventureLeft")?d.tournerAGauche(e):e.classList.contains("aventureRight")&&d.tournerADroite(e),e.classList.contains("sfLeft")?u.tournerAGauche(e):e.classList.contains("sfRight")&&u.tournerADroite(e),e.classList.contains("animeLeft")?m.tournerAGauche(e):e.classList.contains("animeRight")&&m.tournerADroite(e),e.classList.contains("drameLeft")?p.tournerAGauche(e):e.classList.contains("drameRight")&&p.tournerADroite(e),e.classList.contains("horreurLeft")?h.tournerAGauche(e):e.classList.contains("horreurRight")&&h.tournerADroite(e),e.classList.contains("romanceLeft")?g.tournerAGauche(e):e.classList.contains("romanceRight")&&g.tournerADroite(e),e.classList.contains("fantastiqueLeft")?f.tournerAGauche(e):e.classList.contains("fantastiqueRight")&&f.tournerADroite(e),e.classList.contains("thrillerLeft")?v.tournerAGauche(e):e.classList.contains("thrillerRight")&&v.tournerADroite(e)}))})(),document.addEventListener("click",(t=>{t.target.classList.contains("deco")&&(sessionStorage.clear(),window.location.href="../../index.html")}))})();