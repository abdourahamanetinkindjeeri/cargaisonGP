// === Buffer temporaire pour les produits à affecter à la prochaine cargaison ===
let produitsBuffer: Produit[] = [];
// === Imports ===
import { Aerienne } from "./model/Aerienne";
import { Alimentaire } from "./model/Alimentaire";
import { Cargaison } from "./model/Cargaison";
import { Chimique } from "./model/Chimique";
import { Fragile } from "./model/Fragile";
import { Incassable } from "./model/Incassable";
import { Maritine } from "./model/Maritime";
import { Produit } from "./model/Produit";
import { Routiere } from "./model/Routiere";
import { CargaisonManager } from "./model/managers/CargaisonManager";

// === Données de test ===
const produits10: Produit[] = [
  new Alimentaire({ libelle: "Riz", poids: 5 }),
  new Alimentaire({ libelle: "Oignons", poids: 3 }),
  new Fragile({ libelle: "Blinde", poids: 2 }),
  new Fragile({ libelle: "Macbook pro", poids: 10 }),
  new Fragile({ libelle: "Ampoules", poids: 0.5 }),
  new Fragile({ libelle: "Vaisselle", poids: 2 }),
  new Incassable({ libelle: "Marteau", poids: 1 }),
  new Incassable({ libelle: "Clé anglaise", poids: 1 }),
  new Alimentaire({ libelle: "Pomme de terre", poids: 4 }),
  new Incassable({ libelle: "Pile pour pondeuse", poids: 10 }),
];

const produits9: Produit[] = [
  new Alimentaire({ libelle: "Bananes", poids: 2 }),
  new Alimentaire({ libelle: "Tomates", poids: 1 }),
  new Fragile({ libelle: "Téléviseur", poids: 5 }),
  new Chimique({ libelle: "Détergent", poids: 2 }, 6),
  new Chimique({ libelle: "Ammoniac", poids: 1 }, 1),
  new Fragile({ libelle: "Ordinateur portable", poids: 3 }),
  new Incassable({ libelle: "Pelle", poids: 2 }),
  new Incassable({ libelle: "Tournevis", poids: 0.5 }),
  new Alimentaire({ libelle: "Carottes", poids: 2 }),
];

const produits8: Produit[] = [
  new Alimentaire({ libelle: "Pain", poids: 1 }),
  new Incassable({ libelle: "Fer", poids: 30 }),
  new Fragile({ libelle: "Verres à vin", poids: 1 }),
  new Incassable({ libelle: "Scie", poids: 1 }),
  new Alimentaire({ libelle: "Yaourt", poids: 0.5 }),
  new Fragile({ libelle: "Ecran Macbook", poids: 1.5 }),
  new Fragile({ libelle: "Lampe en verre", poids: 2 }),
  new Incassable({ libelle: "Pince", poids: 0.7 }),
];

// === Manager ===
const cargaisonManager = new CargaisonManager();

// === Fonctions utilitaires ===
function afficherCargaisonDansDOM(
  description: string,
  cargaison: Cargaison,
  valeurTotale: number
) {
  const resultatsDiv = document.getElementById("resultats")!;
  const div = document.createElement("div");
  div.className = "cargaison";
  const produitsHTML = cargaison
    .getProduits()
    .map(
      (p) => `<div class="produit">${p.getLibelle()} – ${p.getPoids()} kg</div>`
    )
    .join("");
  div.innerHTML = `
    <h2>${description}</h2>
    <p><strong>Type :</strong> ${cargaison.constructor.name}</p>
    <p><strong>Distance :</strong> ${cargaison.getDistance()} km</p>
    <p><strong>Nombre de produits :</strong> ${
      cargaison.getProduits().length
    }</p>
    <div class="produits">${produitsHTML}</div>
    <p><strong>Total :</strong> ${valeurTotale.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} FCFA</p>
  `;
  resultatsDiv.appendChild(div);
}

function afficherErreurDansDOM(description: string, message: string) {
  const resultatsDiv = document.getElementById("resultats")!;
  const div = document.createElement("div");
  div.className = "cargaison erreur";
  div.innerHTML = `<h2>${description}</h2><p>${message}</p>`;
  resultatsDiv.appendChild(div);
}

function countTypeCargaison(type: string): number {
  return cargaisonManager
    .listerCargaisons()
    .filter((c) => c.constructor.name === type).length;
}

function mettreAJourCompteurs() {
  document.getElementById("routiere-count")!.textContent = String(
    countTypeCargaison("Routiere")
  );
  document.getElementById("maritime-count")!.textContent = String(
    countTypeCargaison("Maritine")
  );
  document.getElementById("aerienne-count")!.textContent = String(
    countTypeCargaison("Aerienne")
  );
}

// === Test dynamique ===
function testCargaison(
  produits: Produit[],
  description: string,
  CargaisonType: new (d: number, p: Produit[]) => Cargaison
): void {
  try {
    const cargaison = new CargaisonType(300, produits);
    const valeurTotale = cargaison.sommeTotale(cargaison);
    cargaisonManager.ajouterCargaison(cargaison);
    afficherCargaisonDansDOM(description, cargaison, valeurTotale);
    mettreAJourCompteurs();
  } catch (e) {
    afficherErreurDansDOM(description, (e as Error).message);
  }
}

// === DOM Ready ===
document.addEventListener("DOMContentLoaded", () => {
  // === Sélecteurs ===
  const popupAddProduct = document.getElementById("popup-add-product")!;
  const popupAddCargaison = document.getElementById("popup-add-cargaison")!;
  const openAddProductBtn = document.getElementById("open-add-product")!;
  const openAddCargaisonBtn = document.getElementById("open-add-cargaison")!;
  const closeAddProductBtn = document.getElementById("close-add-product")!;
  const closeAddCargaisonBtn = document.getElementById("close-add-cargaison")!;

  // === Popups ouverture/fermeture ===
  openAddProductBtn.onclick = () => (popupAddProduct.style.display = "flex");
  openAddCargaisonBtn.onclick = () =>
    (popupAddCargaison.style.display = "flex");
  closeAddProductBtn.onclick = () => (popupAddProduct.style.display = "none");
  closeAddCargaisonBtn.onclick = () =>
    (popupAddCargaison.style.display = "none");
  [popupAddProduct, popupAddCargaison].forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.style.display = "none";
    });
  });

  // === Formulaire cargaison ===
  const formAddCargaison = document.getElementById(
    "form-add-cargaison"
  ) as HTMLFormElement;
  formAddCargaison.addEventListener("submit", (e) => {
    e.preventDefault();
    const distance = parseFloat(
      (document.getElementById("distance-cargaison") as HTMLInputElement).value
    );
    const type = (
      document.getElementById("type-cargaison") as HTMLSelectElement
    ).value;
    try {
      let cargaison: Cargaison;
      switch (type) {
        case "Routiere":
          cargaison = new Routiere(distance, produitsBuffer);
          break;
        case "Maritime":
          cargaison = new Maritine(distance, produitsBuffer);
          break;
        case "Aerienne":
          cargaison = new Aerienne(distance, produitsBuffer);
          break;
        default:
          throw new Error("Type de cargaison inconnu");
      }
      cargaisonManager.ajouterCargaison(cargaison);
      const valeurTotale = cargaison.sommeTotale(cargaison);
      afficherCargaisonDansDOM(
        "Nouvelle cargaison ajoutée",
        cargaison,
        valeurTotale
      );
      mettreAJourCompteurs();
      produitsBuffer = [];
      popupAddCargaison.style.display = "none";
      formAddCargaison.reset();
    } catch (err) {
      afficherErreurDansDOM("Erreur", (err as Error).message);
    }
  });

  // === Formulaire produit ===
  const formAddProduct = document.getElementById(
    "form-add-product"
  ) as HTMLFormElement;
  formAddProduct.addEventListener("submit", (e) => {
    e.preventDefault();
    const nom = (
      document.getElementById("nom-produit") as HTMLInputElement
    ).value.trim();
    const poids = parseFloat(
      (document.getElementById("poids-produit") as HTMLInputElement).value
    );
    const type = (document.getElementById("type-produit") as HTMLSelectElement)
      .value;
    try {
      let produit: Produit;
      switch (type) {
        case "Alimentaire":
          produit = new Alimentaire({ libelle: nom, poids });
          break;
        case "Chimique":
          produit = new Chimique({ libelle: nom, poids }, 1);
          break;
        case "Fragile":
          produit = new Fragile({ libelle: nom, poids });
          break;
        case "Incassable":
          produit = new Incassable({ libelle: nom, poids });
          break;
        default:
          throw new Error("Type de produit inconnu");
      }
      produitsBuffer.push(produit);
      afficherCargaisonDansDOM(
        "Produit ajouté à la liste temporaire",
        {
          ...cargaisonManager.listerCargaisons().slice(-1)[0],
          getProduits: () => produitsBuffer,
          getDistance: () => 0,
          constructor: { name: "Buffer" },
        } as Cargaison,
        0
      );
      popupAddProduct.style.display = "none";
      formAddProduct.reset();
    } catch (err) {
      afficherErreurDansDOM("Erreur", (err as Error).message);
    }
  });

  // === Bouton test ===
  document.getElementById("run-tests")?.addEventListener("click", () => {
    const resultatsDiv = document.getElementById("resultats");
    if (resultatsDiv) resultatsDiv.innerHTML = "";
    cargaisonManager.reset();
    testCargaison(produits10, "Test avec 10 produits valides", Routiere);
    testCargaison([produits10[0]], "Test avec 1 produit valide", Routiere);
    testCargaison(produits9, "Test avec 9 produits", Maritine);
    testCargaison(produits8, "Test avec 8 produits", Aerienne);
    testCargaison(
      [...produits10, ...produits9],
      "Test avec 19 produits (doit échouer)",
      Aerienne
    );
  });
});
