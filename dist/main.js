// // import { Aerienne } from "./model/Aerienne";
// // import { Alimentaire } from "./model/Alimentaire";
// // import { Cargaison } from "./model/Cargaison";
// // import { Chimique } from "./model/Chimique";
// // import { Fragile } from "./model/Fragile";
// // import { Incassable } from "./model/Incassable";
// // import { CargaisonManager } from "./model/managers/CargaisonManager";
// // import { Maritine } from "./model/Maritime";
// // import { Materiel } from "./model/Materiel";
// // import { Produit } from "./model/Produit";
// // import { Routiere } from "./model/Routiere";
// // const produits10: Produit[] = [
// //   new Alimentaire({ libelle: "Riz", poids: 5 }),
// //   new Alimentaire({ libelle: "Oignons", poids: 3 }),
// //   new Fragile({ libelle: "Blinde", poids: 2 }),
// //   new Fragile({ libelle: "Macbook pro", poids: 10 }),
// //   new Fragile({ libelle: "Ampoules", poids: 0.5 }),
// //   new Fragile({ libelle: "Vaisselle", poids: 2 }),
// //   new Incassable({ libelle: "Marteau", poids: 1 }),
// //   new Incassable({ libelle: "Clé anglaise", poids: 1 }),
// //   new Alimentaire({ libelle: "Pomme de terre", poids: 4 }),
// //   new Incassable({ libelle: "Pile pour pondeuse", poids: 10 }),
// // ];
// // const produits9: Produit[] = [
// //   new Alimentaire({ libelle: "Bananes", poids: 2 }),
// //   new Alimentaire({ libelle: "Tomates", poids: 1 }),
// //   new Fragile({ libelle: "Téléviseur", poids: 5 }),
// //   new Chimique({ libelle: "Détergent", poids: 2 }, 6),
// //   new Chimique({ libelle: "Ammoniac", poids: 1 }, 1),
// //   new Fragile({ libelle: "Ordinateur portable", poids: 3 }),
// //   new Incassable({ libelle: "Pelle", poids: 2 }),
// //   new Incassable({ libelle: "Tournevis", poids: 0.5 }),
// //   new Alimentaire({ libelle: "Carottes", poids: 2 }),
// // ];
// // const produitsValides = [
// //   new Alimentaire({ libelle: "Pommes", poids: 0 }),
// //   new Alimentaire({ libelle: "Bananes", poids: 0 }),
// //   new Alimentaire({ libelle: "Poires", poids: 0 }),
// //   new Fragile({ libelle: "Fibre optique", poids: 1 }),
// // ];
// // const produits8: Produit[] = [
// //   new Alimentaire({ libelle: "Pain", poids: 1 }),
// //   new Incassable({ libelle: "Fer", poids: 30 }),
// //   new Fragile({ libelle: "Verres à vin", poids: 1 }),
// //   new Incassable({ libelle: "Scie", poids: 1 }),
// //   new Alimentaire({ libelle: "Yaourt", poids: 0.5 }),
// //   new Fragile({ libelle: "Ecran Macbook", poids: 1.5 }),
// //   new Fragile({ libelle: "Lampe en verre", poids: 2 }),
// //   new Incassable({ libelle: "Pince", poids: 0.7 }),
// // ];
// // // function testCargaison(
// // //   produits: Produit[],
// // //   description: string,
// // //   CargaisonType: new (distance: number, produits: Produit[]) => Cargaison
// // // ): void {
// // //   try {
// // //     const cargaison = new CargaisonType(300, produits);
// // //     const valeurTotale = cargaison
// // //       .sommeTotale(cargaison)
// // //       .toLocaleString("fr-FR", {
// // //         minimumFractionDigits: 2,
// // //         maximumFractionDigits: 2,
// // //       });
// // //     console.log(
// // //       `[SUCCÈS] ${description} → ${CargaisonType.name} avec ${produits.length} produit(s). Valeur totale: ${valeurTotale} FCFA`
// // //     );
// // //   } catch (e) {
// // //     console.error(`[ÉCHEC] ${description} → ${(e as Error).message}`);
// // //   }
// // // }
// // // testCargaison(produits10, "Test avec 10 produits valides", Routiere);
// // // testCargaison([produits10[0]], "Test avec 1 produit valide", Routiere);
// // // testCargaison(produits9, "Test avec 9 produits (doit échouer)", Maritine);
// // // testCargaison(produits8, "Test avec 8 produits (doit échouer)", Aerienne);
// // function afficherCargaisonDansDOM(
// //   description: string,
// //   cargaison: Cargaison,
// //   valeurTotale: number
// // ) {
// //   const resultatsDiv = document.getElementById("resultats")!;
// //   const div = document.createElement("div");
// //   div.className = "cargaison";
// //   const produitsHTML = cargaison
// //     .getProduits()
// //     .map(
// //       (p) => `<div class="produit"> ${p.getLibelle} – ${p.getPoids()} kg</div>`
// //     )
// //     .join("");
// //   div.innerHTML = `
// //     <h2>${description}</h2>
// //     <p><strong>Type :</strong> ${cargaison.constructor.name}</p>
// //     <p><strong>Distance :</strong> ${cargaison.getDistance()} km</p>
// //     <p><strong>Nombre de produits :</strong> ${
// //       cargaison.getProduits().length
// //     }</p>
// //     <div class="produits">${produitsHTML}</div>
// //     <p><strong>Total :</strong> ${valeurTotale.toLocaleString("fr-FR", {
// //       minimumFractionDigits: 2,
// //       maximumFractionDigits: 2,
// //     })} FCFA</p>
// //   `;
// //   resultatsDiv.appendChild(div);
// // }
// // function afficherErreurDansDOM(description: string, message: string) {
// //   const resultatsDiv = document.getElementById("resultats")!;
// //   const div = document.createElement("div");
// //   div.className = "cargaison erreur";
// //   div.innerHTML = `<h2>${description}</h2><p> ${message}</p>`;
// //   resultatsDiv.appendChild(div);
// // }
// // function testCargaison(
// //   produits: Produit[],
// //   description: string,
// //   CargaisonType: new (distance: number, produits: Produit[]) => Cargaison
// // ): void {
// //   try {
// //     const cargaison = new CargaisonType(300, produits);
// //     const valeurTotale = cargaison.sommeTotale(cargaison);
// //     afficherCargaisonDansDOM(description, cargaison, valeurTotale);
// //   } catch (e) {
// //     afficherErreurDansDOM(description, (e as Error).message);
// //   }
// // }
// // testCargaison(produits10, "Test avec 10 produits valides", Routiere);
// // testCargaison([produits10[0]], "Test avec 1 produit valide", Routiere);
// // testCargaison(produits9, "Test avec 9 produits (doit échouer)", Maritine);
// // testCargaison(produits8, "Test avec 8 produits (doit échouer)", Aerienne);
// import { Aerienne } from "./model/Aerienne";
// import { Alimentaire } from "./model/Alimentaire";
// import { Cargaison } from "./model/Cargaison";
// import { Chimique } from "./model/Chimique";
// import { Fragile } from "./model/Fragile";
// import { Incassable } from "./model/Incassable";
// import { CargaisonManager } from "./model/managers/CargaisonManager";
// import { Maritine } from "./model/Maritime";
// import { Materiel } from "./model/Materiel";
// import { Produit } from "./model/Produit";
// import { Routiere } from "./model/Routiere";
// // === Données de test ===
// const produits10: Produit[] = [
//   new Alimentaire({ libelle: "Riz", poids: 5 }),
//   new Alimentaire({ libelle: "Oignons", poids: 3 }),
//   new Fragile({ libelle: "Blinde", poids: 2 }),
//   new Fragile({ libelle: "Macbook pro", poids: 10 }),
//   new Fragile({ libelle: "Ampoules", poids: 0.5 }),
//   new Fragile({ libelle: "Vaisselle", poids: 2 }),
//   new Incassable({ libelle: "Marteau", poids: 1 }),
//   new Incassable({ libelle: "Clé anglaise", poids: 1 }),
//   new Alimentaire({ libelle: "Pomme de terre", poids: 4 }),
//   new Incassable({ libelle: "Pile pour pondeuse", poids: 10 }),
// ];
// const produits9: Produit[] = [
//   new Alimentaire({ libelle: "Bananes", poids: 2 }),
//   new Alimentaire({ libelle: "Tomates", poids: 1 }),
//   new Fragile({ libelle: "Téléviseur", poids: 5 }),
//   new Chimique({ libelle: "Détergent", poids: 2 }, 6),
//   new Chimique({ libelle: "Ammoniac", poids: 1 }, 1),
//   new Fragile({ libelle: "Ordinateur portable", poids: 3 }),
//   new Incassable({ libelle: "Pelle", poids: 2 }),
//   new Incassable({ libelle: "Tournevis", poids: 0.5 }),
//   new Alimentaire({ libelle: "Carottes", poids: 2 }),
// ];
// const produits8: Produit[] = [
//   new Alimentaire({ libelle: "Pain", poids: 1 }),
//   new Incassable({ libelle: "Fer", poids: 30 }),
//   new Fragile({ libelle: "Verres à vin", poids: 1 }),
//   new Incassable({ libelle: "Scie", poids: 1 }),
//   new Alimentaire({ libelle: "Yaourt", poids: 0.5 }),
//   new Fragile({ libelle: "Ecran Macbook", poids: 1.5 }),
//   new Fragile({ libelle: "Lampe en verre", poids: 2 }),
//   new Incassable({ libelle: "Pince", poids: 0.7 }),
// ];
// // === Interface DOM ===
// function afficherCargaisonDansDOM(
//   description: string,
//   cargaison: Cargaison,
//   valeurTotale: number
// ) {
//   const resultatsDiv = document.getElementById("resultats")!;
//   const div = document.createElement("div");
//   div.className = "cargaison";
//   const produitsHTML = cargaison
//     .getProduits()
//     .map(
//       (p) => `<div class="produit">${p.getLibelle()} – ${p.getPoids()} kg</div>`
//     )
//     .join("");
//   div.innerHTML = `
//     <h2>${description}</h2>
//     <p><strong>Type :</strong> ${cargaison.constructor.name}</p>
//     <p><strong>Distance :</strong> ${cargaison.getDistance()} km</p>
//     <p><strong>Nombre de produits :</strong> ${
//       cargaison.getProduits().length
//     }</p>
//     <div class="produits">${produitsHTML}</div>
//     <p><strong>Total :</strong> ${valeurTotale.toLocaleString("fr-FR", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     })} FCFA</p>
//   `;
//   resultatsDiv.appendChild(div);
// }
// function afficherErreurDansDOM(description: string, message: string) {
//   const resultatsDiv = document.getElementById("resultats")!;
//   const div = document.createElement("div");
//   div.className = "cargaison erreur";
//   div.innerHTML = `<h2>${description}</h2><p> ${message}</p>`;
//   resultatsDiv.appendChild(div);
// }
// function testCargaison(
//   produits: Produit[],
//   description: string,
//   CargaisonType: new (distance: number, produits: Produit[]) => Cargaison
// ): void {
//   try {
//     const cargaison = new CargaisonType(300, produits);
//     const valeurTotale = cargaison.sommeTotale(cargaison);
//     afficherCargaisonDansDOM(description, cargaison, valeurTotale);
//   } catch (e) {
//     afficherErreurDansDOM(description, (e as Error).message);
//   }
// }
// // === Tests ===
// testCargaison(produits10, "Test avec 10 produits valides", Routiere);
// testCargaison([produits10[0]], "Test avec 1 produit valide", Routiere);
// testCargaison(produits9, "Test avec 9 produits ", Maritine);
// testCargaison(produits8, "Test avec 8 produits ", Aerienne);
// testCargaison(
//   [...produits10, ...produits9],
//   "Test avec  produits (doit échouer)",
//   Aerienne
// );
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
const countTypeCargaison = (cargaison, compteur) => { };
// function testCargaison(
//   produits: Produit[],
//   description: string,
//   CargaisonType: new (distance: number, produits: Produit[]) => Cargaison
// ): void {
//   try {
//     const cargaison = new CargaisonType(300, produits);
//     console.log(cargaison instanceof Routiere); //
//     const valeurTotale = cargaison.sommeTotale(cargaison);
//     afficherCargaisonDansDOM(description, cargaison, valeurTotale);
//   } catch (e) {
//     afficherErreurDansDOM(description, (e as Error).message);
//   }
// }
const cargaisonManager = new CargaisonManager();
function testCargaison(produits, description, CargaisonType) {
    try {
        const cargaison = new CargaisonType(300, produits);
        const valeurTotale = cargaison.sommeTotale(cargaison);
        cargaisonManager.ajouterCargaison(cargaison); // 🔴 ajoute la cargaison
        afficherCargaisonDansDOM(description, cargaison, valeurTotale);
    }
    catch (e) {
        afficherErreurDansDOM(description, e.message);
    }
}
document.getElementById("run-tests")?.addEventListener("click", () => {
    const resultatsDiv = document.getElementById("resultats");
    if (resultatsDiv)
        resultatsDiv.innerHTML = "";
    testCargaison(produits10, "Test avec 10 produits valides", Routiere);
    testCargaison([produits10[0]], "Test avec 1 produit valide", Routiere);
    testCargaison(produits9, "Test avec 9 produits", Maritine);
    testCargaison(produits8, "Test avec 8 produits", Aerienne);
    testCargaison([...produits10, ...produits9], "Test avec 19 produits (doit échouer)", Aerienne);
});
function mettreAJourCompteurs() {
    document.getElementById("routiere-count").textContent = String(countTypeCargaison("Routiere"));
    document.getElementById("maritime-count").textContent = String(countTypeCargaison("Maritine"));
    document.getElementById("aerienne-count").textContent = String(countTypeCargaison("Aerienne"));
}
