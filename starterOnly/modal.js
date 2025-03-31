function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Sélectionne tous les éléments avec la classe "js-close" (dans ce cas, la croix de fermeture dans le modal)
const closeBtns = document.querySelectorAll(".js-close");

// Evénement de la fermeture du modal
// Pour chaque bouton de fermeture trouvé (même s'il n'y en a qu'un ici)
closeBtns.forEach((b) =>
  b.addEventListener("click", () => {
    // Quand on clique sur la croix, on appelle la fonction closeModal()
    closeModal();
  })
);

// Fonction pour fermer le modal
function closeModal() {
  // Cache le modal principal en mettant son style display à "none"
  modalbg.style.display = "none";
  
  // Cache également le modal de confirmation (même s'il n'est pas visible dans le code HTML fourni)
  // Cette ligne est probablement là pour gérer un cas futur où un modal de confirmation serait affiché
  modalConfirm.style.display = "none";
}



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


