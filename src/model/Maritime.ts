import { Alimentaire } from "./Alimentaire";
import { Cargaison } from "./Cargaison";
import { Chimique } from "./Chimique";
import { Fragile } from "./Fragile";
import { Incassable } from "./Incassable";
import { Produit } from "./Produit";

export class Maritine extends Cargaison {
  override calculerFrais<T extends Produit>(produit: T): number {
    const priceAlimentaire = 90;
    const priceMaterial = 400;
    const priceChimique = 500;
    let frais = 0;
    if (produit instanceof Alimentaire) {
      frais = 5000;
      return produit.getPoids() * this.distance * priceAlimentaire + frais;
    }

    if (produit instanceof Chimique) {
      frais = 10000;

      return produit.getPoids() * this.distance * priceChimique + frais;
    }

    if (produit instanceof Fragile || produit instanceof Incassable) {
      return produit.getPoids() * this.distance * priceMaterial;
    }

    throw new Error("Type de produit non pris en charge");
  }

  override sommeTotale(): number {
    return this.produits.reduce(
      (total, produit) => total + this.calculerFrais(produit),
      0
    );
  }

  override nombreProduit(): number {
    return this.produits.length;
  }

  //   override sommeTotale<T extends Cargaison>(cargo: T): number {
  //     let somme = 0;
  //     this.produits.forEach((produit) => {
  //       somme += this.calculerFrais(produit);
  //     });

  //     return somme;
  //   }
}
