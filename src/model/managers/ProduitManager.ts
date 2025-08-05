import { Alimentaire } from "../Alimentaire";
import { ProduitAddInterface } from "../interfaces/ProduitAddInterface";
import { Produit } from "../Produit";

export class ProduitManager implements ProduitAddInterface {
  private produits: Produit[] = [];

  ajouterProduit<T extends Produit>(produit: T) {
    this.produits.push(produit);

    return this.produits;
  }

  listerProduits(): void {
    this.produits.forEach((produit, index) => {
      console.log(`Produit ${index + 1}: ${produit.info()}`);
    });
  }

  getProduits(): Produit[] {
    return this.produits;
  }
}
