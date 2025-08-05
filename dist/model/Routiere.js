import { Alimentaire } from "./Alimentaire";
import { Cargaison } from "./Cargaison";
import { Chimique } from "./Chimique";
import { Fragile } from "./Fragile";
import { Incassable } from "./Incassable";
export class Routiere extends Cargaison {
    calculerFrais(produit) {
        const priceAlimentaire = 100;
        const priceMaterial = 200;
        let frais = 0;
        if (produit instanceof Alimentaire) {
            return produit.getPoids() * this.distance * priceAlimentaire + frais;
        }
        if (produit instanceof Chimique) {
            throw new Error("Les produits chimiques ne sont pas expédiés par voie maritime");
        }
        if (produit instanceof Fragile || produit instanceof Incassable) {
            frais = 10000;
            return produit.getPoids() * this.distance * priceMaterial + frais;
        }
        throw new Error("Type de produit non pris en charge");
    }
    sommeTotale() {
        return this.produits.reduce((total, produit) => total + this.calculerFrais(produit), 0);
    }
    nombreProduit() {
        return this.produits.length;
    }
}
