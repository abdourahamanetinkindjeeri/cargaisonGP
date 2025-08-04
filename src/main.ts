import { Alimentaire } from "./model/Alimentaire";
import { ProduitManager } from "./model/managers/ProduitManager";

const manager = new ProduitManager();

manager.ajouterProduit(new Alimentaire({ libelle: "Pommes", poids: 10 }));

console.log(manager.listerProduits());
