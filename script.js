//pour le chargement :  tjr repris du portfolio 😭😭🙏//
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("mainContent");
  const progressFill = document.getElementById("progressFill");

  //la barre de progression //
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressFill.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      // fin du chargééééé //
      setTimeout(() => {
        loader.classList.add("fade-out");
        mainContent.classList.add("visible"); //au démarage marche, fin = erreur à l'inspecteur//

        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }, 300);
    }
  }, 100);
});
//teste //*



// On créer une const avec un nom, les chemins qui mènnent à la source audio mp3 suivi du dossier//
const audioSources = [
  "musique/FIETSPOMP SLOWED.mp3",
  "musique/LONE PINNEAPLE SLOWED.mp3",
  "musique/GYPSY WOMAN.mp3",
];
// Couleurs de fond pour chaque bouton, associées aux thèmes des artistes via le figma//
const backgroundColors = [
  "#DBE4FF", // CITROEN
  "#ff9294", // BMW
  "#FFDFA9", // MAZDA
];

let currentAudio = null;
let activeButton = null;

function playAudio(index) {
  if (activeButton !== null) {
    document
      .querySelectorAll(".button")
      [activeButton].classList.remove("active");
  }

  // Arrête l'audio en cours si il y en a un autre après//
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Change la couleur de fond du body et on le relie sur le css //
  document.body.style.backgroundColor = backgroundColors[index];

  // Ajoute la classe active au bouton cliqué et l'active si j'ai bien compris //
  document.querySelectorAll(".button")[index].classList.add("active");
  activeButton = index;

  // Crée et joue le nouvel audio suivant lorsqu'on clique //
  currentAudio = new Audio(audioSources[index]);
  currentAudio.play();

  currentAudio.addEventListener("ended", function () {
    document.querySelectorAll(".button")[index].classList.remove("active");
    document.body.style.backgroundColor = "white";
    activeButton = null;
  });
}



// Sketch le 02/01 et produit le 07/01//
// source aide : https://youtu.be/Qos80OkI7MY?si=RkdndJgX1PhVCjAd //
// https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/audio //
