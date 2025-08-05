import { Aerienne } from "./model/Aerienne";
import { Alimentaire } from "./model/Alimentaire";
import { Cargaison } from "./model/Cargaison";
import { Chimique } from "./model/Chimique";
import { Fragile } from "./model/Fragile";
import { Incassable } from "./model/Incassable";
import { CargaisonManager } from "./model/managers/CargaisonManager";
import { Maritine } from "./model/Maritime";
import { Materiel } from "./model/Materiel";
import { Produit } from "./model/Produit";
import { Routiere } from "./model/Routiere";

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

const produitsValides = [
  new Alimentaire({ libelle: "Pommes", poids: 0 }),
  new Alimentaire({ libelle: "Bananes", poids: 0 }),
  new Alimentaire({ libelle: "Poires", poids: 0 }),
  new Fragile({ libelle: "Fibre optique", poids: 1 }),
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

function testCargaison(
  produits: Produit[],
  description: string,
  CargaisonType: new (distance: number, produits: Produit[]) => Cargaison
): void {
  try {
    const cargaison = new CargaisonType(300, produits);
    const valeurTotale = cargaison
      .sommeTotale(cargaison)
      .toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    console.log(
      `[SUCCÈS] ${description} → ${CargaisonType.name} avec ${produits.length} produit(s). Valeur totale: ${valeurTotale} FCFA`
    );
  } catch (e) {
    console.error(`[ÉCHEC] ${description} → ${(e as Error).message}`);
  }
}

testCargaison(produits10, "Test avec 10 produits valides", Routiere);
testCargaison([produits10[0]], "Test avec 1 produit valide", Routiere);
testCargaison(produits9, "Test avec 9 produits (doit échouer)", Maritine);
testCargaison(produits8, "Test avec 8 produits (doit échouer)", Aerienne);
