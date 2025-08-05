import { Aerienne } from "./model/Aerienne";
import { Alimentaire } from "./model/Alimentaire";
import { Chimique } from "./model/Chimique";
import { Fragile } from "./model/Fragile";
import { Incassable } from "./model/Incassable";
import { CargaisonManager } from "./model/managers/CargaisonManager";
import { Maritine } from "./model/Maritime";
import { Routiere } from "./model/Routiere";
// === Données de test ===
const produits10 = [
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
const produits9 = [
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
const produits8 = [
    new Alimentaire({ libelle: "Pain", poids: 1 }),
    new Incassable({ libelle: "Fer", poids: 30 }),
    new Fragile({ libelle: "Verres à vin", poids: 1 }),
    new Incassable({ libelle: "Scie", poids: 1 }),
    new Alimentaire({ libelle: "Yaourt", poids: 0.5 }),
    new Fragile({ libelle: "Ecran Macbook", poids: 1.5 }),
    new Fragile({ libelle: "Lampe en verre", poids: 2 }),
    new Incassable({ libelle: "Pince", poids: 0.7 }),
];
// === CargaisonManager ===
const cargaisonManager = new CargaisonManager();
// === Fonctions DOM ===
function afficherCargaisonDansDOM(description, cargaison, valeurTotale) {
    const resultatsDiv = document.getElementById("resultats");
    const div = document.createElement("div");
    div.className = "cargaison";
    const produitsHTML = cargaison
        .getProduits()
        .map((p) => `<div class="produit">${p.getLibelle()} – ${p.getPoids()} kg</div>`)
        .join("");
    div.innerHTML = `
    <h2>${description}</h2>
    <p><strong>Type :</strong> ${cargaison.constructor.name}</p>
    <p><strong>Distance :</strong> ${cargaison.getDistance()} km</p>
    <p><strong>Nombre de produits :</strong> ${cargaison.getProduits().length}</p>
    <div class="produits">${produitsHTML}</div>
    <p><strong>Total :</strong> ${valeurTotale.toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} FCFA</p>
  `;
    resultatsDiv.appendChild(div);
}
function afficherErreurDansDOM(description, message) {
    const resultatsDiv = document.getElementById("resultats");
    const div = document.createElement("div");
    div.className = "cargaison erreur";
    div.innerHTML = `<h2>${description}</h2><p>${message}</p>`;
    resultatsDiv.appendChild(div);
}
// === Compteur par type ===
function countTypeCargaison(type) {
    return cargaisonManager
        .listerCargaisons()
        .filter((c) => c.constructor.name === type).length;
}
function mettreAJourCompteurs() {
    document.getElementById("routiere-count").textContent = String(countTypeCargaison("Routiere"));
    document.getElementById("maritime-count").textContent = String(countTypeCargaison("Maritine"));
    document.getElementById("aerienne-count").textContent = String(countTypeCargaison("Aerienne"));
}
// === Fonction principale ===
function testCargaison(produits, description, CargaisonType) {
    try {
        const cargaison = new CargaisonType(300, produits);
        const valeurTotale = cargaison.sommeTotale(cargaison);
        cargaisonManager.ajouterCargaison(cargaison);
        afficherCargaisonDansDOM(description, cargaison, valeurTotale);
        mettreAJourCompteurs();
    }
    catch (e) {
        afficherErreurDansDOM(description, e.message);
    }
}
// === Lancer les tests ===
document.getElementById("run-tests")?.addEventListener("click", () => {
    const resultatsDiv = document.getElementById("resultats");
    if (resultatsDiv)
        resultatsDiv.innerHTML = "";
    cargaisonManager.reset();
    testCargaison(produits10, "Test avec 10 produits valides", Routiere);
    testCargaison([produits10[0]], "Test avec 1 produit valide", Routiere);
    testCargaison(produits9, "Test avec 9 produits", Maritine);
    testCargaison(produits8, "Test avec 8 produits", Aerienne);
    testCargaison([...produits10, ...produits9], "Test avec 19 produits (doit échouer)", Aerienne);
});
